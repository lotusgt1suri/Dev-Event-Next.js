# DevEvent - Your Hub for Developer Events

A modern web application built with **Next.js 16**, **React 19**, and **Tailwind CSS** to discover and explore developer events including hackathons, conferences, meetups, and tech workshops.

## 🎯 Features

- **Event Discovery** - Browse and explore upcoming developer events
- **Event Details** - View comprehensive information about each event including date, time, and location
- **Responsive Design** - Fully responsive UI that works seamlessly on mobile, tablet, and desktop
- **Modern Stack** - Built with cutting-edge technologies (Next.js 16, React 19, Tailwind CSS 4)
- **Type-Safe** - Full TypeScript support for better development experience
- **Event Filtering** - Filter and explore featured events
- **Clean UI** - Intuitive and user-friendly interface with smooth navigation

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.0
- **React**: 19.2.8
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint with Next.js configuration

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-js-crash-course
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── EventCard.tsx        # Event card component
│   ├── ExploreEvent.tsx     # Explore button component
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer/              # Footer component
│   └── Icons/               # SVG icon components
│       ├── DateIcon.tsx     # Calendar icon
│       └── TimeIcon.tsx     # Clock icon
├── data/                    # Static data
│   └── events.ts           # Events dataset
├── public/                  # Static assets
│   └── dev-logo.svg        # DevEvent logo
└── tsconfig.json           # TypeScript configuration
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Components

### EventCard

Displays individual event information with title, location, date, and time with SVG icons.

### Navbar

Navigation component for site-wide navigation.

### ExploreEvent

Call-to-action button to explore events.

### Icons

Reusable SVG icon components (DateIcon, TimeIcon) with customizable size and color.

## 📝 Features to Explore

- **Event Listing** - View featured events in a responsive grid layout
- **Event Details** - Click on any event to see detailed information
- **Clean Typography** - Beautiful typography hierarchy for easy reading
- **Spacing & Layout** - Proper spacing and alignment for visual hierarchy

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## 📄 License

This project is open source and available for educational and personal use.

---

**Built with ❤️ during a Next.js crash course**
