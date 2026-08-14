import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between max-w-[1240] h-full w-full mx-auto py-2 ring-gray-alpha-400 items-center gap-4">
        <Link href="/" className="logo font-bold">
          <Image src="/dev-logo.svg" alt="logo" width={250} height={130} />
        </Link>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Event</Link>
          </li>
          <li>
            <Link href="/events/create">Create Event</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
