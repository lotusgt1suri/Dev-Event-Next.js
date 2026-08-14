import Link from "next/link";
import type { EventItem } from "@/data/events";
import Image from "next/image";

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <li className="overflow-hidden shadow-sm">
      <Image
        src={event.image}
        alt={event.title}
        width={400}
        height={200}
        unoptimized
        className="w-full h-auto object-cover"
      />

      <div className="p-3">
        <p className="text-sm flex items-center gap-1">
          <Image src="/marker.svg" alt="Marker" width={16} height={16} />
          {event.location}
        </p>
        <h3 className="font-semibold text-lg my-2">{event.title}</h3>
        <div className="flex gap-4 text-sm mt-2">
          <span className="flex items-center gap-1">
            <Image src="/calendar.svg" alt="Calendar" width={16} height={16} />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <Image src="/time.svg" alt="Time" width={16} height={16} />
            {event.time} AM
          </span>
        </div>

        <div className="mt-3">
          <Link href={`/events/${event.slug}`} className="text-sm underline">
            View details
          </Link>
        </div>
      </div>
    </li>
  );
}
