import Link from "next/link";

export default function ExploreBtn() {
  return (
    <button
      type="button"
      className="bg-white mt-4 box-border border border-transparent focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none rounded-3xl text-black cursor-pointer"
    >
      <Link href="#featuredEvents">Explore Events</Link>
    </button>
  );
}
