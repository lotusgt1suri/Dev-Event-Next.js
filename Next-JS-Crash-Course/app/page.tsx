import ExploreBtn from "@/components/ExploreEvent";
import EventCard from "@/components/EventCard";
import events from "@/data/events";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1240] mx-auto py-8 space-y-12">
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-4">
            The Hub for Every Dev <br /> Event You Can't Miss
          </h1>
          <p>Hackathons, Conferences, Events, Meetups, All in one place.</p>
          <ExploreBtn />
        </div>

        <div id="featuredEvents" className="featured-events space-y-4 my-6">
          <h4 className="text-2xl">Featured Events</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 mt-4">
            {events.map((evt) => (
              <EventCard key={evt.slug} event={evt} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
