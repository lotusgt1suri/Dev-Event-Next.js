"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function ExploreBtn() {
  const handleExploreEvents = () => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("featured_events_explored");
    }
  };

  return (
    <button
      type="button"
      className="bg-white mt-4 box-border border border-transparent focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none rounded-3xl text-black cursor-pointer"
    >
      <Link href="#featuredEvents" onClick={handleExploreEvents}>
        Explore Events
      </Link>
    </button>
  );
}
