import mongoose, {
  Schema,
  model,
  models,
  type Document,
  type Types,
} from "mongoose";
import Event from "./event.model";

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => emailPattern.test(value),
        message: "Email must be a valid email address.",
      },
    },
  },
  { timestamps: true },
);

bookingSchema.pre(
  "save",
  async function (
    this: mongoose.HydratedDocument<IBooking>,
    _options: mongoose.SaveOptions,
  ) {
    if (!this.eventId) {
      throw new Error("eventId is required.");
    }

    if (!mongoose.Types.ObjectId.isValid(this.eventId.toString())) {
      throw new Error("eventId must be a valid ObjectId.");
    }

    const eventExists = await Event.exists({ _id: this.eventId });

    if (!eventExists) {
      throw new Error("The referenced event does not exist.");
    }

    if (!this.email || !emailPattern.test(this.email.trim())) {
      throw new Error("Email must be properly formatted.");
    }
  },
);

bookingSchema.index({ eventId: 1 });

const Booking = models.Booking || model<IBooking>("Booking", bookingSchema);

export default Booking;
