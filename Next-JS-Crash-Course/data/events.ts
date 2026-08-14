export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
};

const events: EventItem[] = [
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%230b3a53'/><text x='50%' y='50%' font-family='Arial' font-size='36' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>React%20Summit</text></svg>",
    title: "React Summit: Building Better UIs",
    slug: "react-summit-2026",
    location: "San Francisco, CA",
    date: "2026-09-05",
    time: "09:30",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23263238'/><text x='50%' y='50%' font-family='Arial' font-size='36' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Next.js%20Deep%20Dive</text></svg>",
    title: "Next.js Deep Dive",
    slug: "nextjs-deep-dive",
    location: "New York, NY",
    date: "2026-09-12",
    time: "10:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23003a63'/><text x='50%' y='50%' font-family='Arial' font-size='34' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Full-Stack%20Jam</text></svg>",
    title: "Full-Stack Jam: APIs & Databases",
    slug: "fullstack-jam-apis",
    location: "Austin, TX",
    date: "2026-09-18",
    time: "18:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%2300593a'/><text x='50%' y='50%' font-family='Arial' font-size='32' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Design%20Systems</text></svg>",
    title: "Design Systems in Practice",
    slug: "design-systems-practice",
    location: "Remote",
    date: "2026-10-02",
    time: "13:30",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23123a6b'/><text x='50%' y='50%' font-family='Arial' font-size='34' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>AI%20for%20Devs</text></svg>",
    title: "AI for Developers Workshop",
    slug: "ai-for-developers",
    location: "Boston, MA",
    date: "2026-10-08",
    time: "10:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%230f1724'/><text x='50%' y='50%' font-family='Arial' font-size='30' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>GraphQL%20Conf</text></svg>",
    title: "GraphQL Conference",
    slug: "graphql-conference-2026",
    location: "Seattle, WA",
    date: "2026-09-20",
    time: "14:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23007acc'/><text x='50%' y='50%' font-family='Arial' font-size='32' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Serverless%20Meetup</text></svg>",
    title: "Serverless Architectures Meetup",
    slug: "serverless-meetup",
    location: "Remote",
    date: "2026-12-01",
    time: "11:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%232f855a'/><text x='50%' y='50%' font-family='Arial' font-size='32' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>TypeScript</text></svg>",
    title: "TypeScript: From Zero to Hero",
    slug: "typescript-zero-to-hero",
    location: "Chicago, IL",
    date: "2026-08-30",
    time: "19:00",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%231b3b50'/><text x='50%' y='50%' font-family='Arial' font-size='30' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Accessibility%20Bootcamp</text></svg>",
    title: "Accessibility Bootcamp",
    slug: "accessibility-bootcamp",
    location: "Los Angeles, CA",
    date: "2026-10-15",
    time: "09:30",
  },
  {
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%232b3b4a'/><text x='50%' y='50%' font-family='Arial' font-size='30' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle'>Open%20Source%20Day</text></svg>",
    title: "Open Source Contributor Day",
    slug: "opensource-contrib-day",
    location: "Remote",
    date: "2026-12-10",
    time: "12:00",
  },
];

export default events;
