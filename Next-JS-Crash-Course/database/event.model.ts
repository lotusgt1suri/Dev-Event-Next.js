import mongoose, { Schema, model, models, type Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: "online" | "offline" | "hybrid";
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);

const normalizeDate = (value: string): string => {
  if (!value || !value.trim()) {
    throw new Error("Date is required.");
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error("Date must be a valid ISO date string.");
  }

  return parsedDate.toISOString().slice(0, 10);
};

const normalizeTime = (value: string): string => {
  if (!value || !value.trim()) {
    throw new Error("Time is required.");
  }

  const trimmedValue = value.trim();

  const twentyFourHourMatch = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (twentyFourHourMatch.test(trimmedValue)) {
    return trimmedValue;
  }

  const twelveHourMatch = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i;
  const match = trimmedValue.match(twelveHourMatch);

  if (!match) {
    throw new Error(
      "Time must be stored in a consistent 24-hour format such as 09:30.",
    );
  }

  const [, hourStr, minuteStr, modifier] = match;
  const hours = Number(hourStr);
  const minutes = Number(minuteStr);
  const normalizedHours =
    modifier.toUpperCase() === "PM" && hours !== 12 ? hours + 12 : hours;

  return `${String(normalizedHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required."],
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, "Overview is required."],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image URL is required."],
      trim: true,
    },
    venue: {
      type: String,
      required: [true, "Venue is required."],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required."],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Date is required."],
      trim: true,
    },
    time: {
      type: String,
      required: [true, "Time is required."],
      trim: true,
    },
    mode: {
      type: String,
      enum: {
        values: ["online", "offline", "hybrid"],
        message: "Mode must be online, offline, or hybrid.",
      },
      required: [true, "Mode is required."],
    },
    audience: {
      type: String,
      required: [true, "Audience is required."],
      trim: true,
    },
    agenda: {
      type: [String],
      required: [true, "Agenda is required."],
      validate: {
        validator: (value: string[]): boolean =>
          Array.isArray(value) && value.length > 0,
        message: "Agenda must contain at least one item.",
      },
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required."],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, "Tags are required."],
      validate: {
        validator: (value: string[]): boolean =>
          Array.isArray(value) && value.length > 0,
        message: "Tags must contain at least one item.",
      },
    },
  },
  {
    timestamps: true,
  },
);

eventSchema.pre(
  "save",
  async function (
    this: mongoose.HydratedDocument<IEvent>,
    _options: mongoose.SaveOptions,
  ) {
    const title = this.title?.trim();

    if (!title) {
      throw new Error("Title is required.");
    }

    if (this.isModified("title")) {
      this.slug = slugify(title);
    }

    if (!this.slug || !this.slug.trim()) {
      this.slug = slugify(title);
    }

    this.date = normalizeDate(this.date);
    this.time = normalizeTime(this.time);

    const requiredFields = [
      "description",
      "overview",
      "image",
      "venue",
      "location",
      "audience",
      "organizer",
    ] as const;

    for (const field of requiredFields) {
      const value = this[field];

      if (typeof value !== "string" || !value.trim()) {
        throw new Error(
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`,
        );
      }
    }

    if (
      !Array.isArray(this.agenda) ||
      this.agenda.length === 0 ||
      this.agenda.some((item: string) => !item.trim())
    ) {
      throw new Error("Agenda must contain non-empty strings.");
    }

    if (
      !Array.isArray(this.tags) ||
      this.tags.length === 0 ||
      this.tags.some((item: string) => !item.trim())
    ) {
      throw new Error("Tags must contain non-empty strings.");
    }
  },
);

eventSchema.index({ slug: 1 }, { unique: true });

const Event = models.Event || model<IEvent>("Event", eventSchema);

export default Event;
