/**
 * Single source of truth for HackDay Butwal event details.
 * Update values here instead of hard-coding them in components.
 */
export const EVENT = {
  name: "HackDay Butwal",
  siteUrl: "https://hackday.butwalhacks.com",
  organizer: "Butwal Hacks",
  organizerUrl: "https://www.butwalhacks.com",
  location: "Butwal, Nepal",
  venue: "Lumbini World School",
  timezone: "Asia/Kathmandu",
  // Matches the MLH and Devpost listings.
  date: "2026-01-17",
  dateLabel: "January 17",
  dateLong: "January 17, 2026",
  startTime: "08:00:00",
  endTime: "18:00:00",
  durationHours: 10,
  links: {
    devpost: "https://butwal.devpost.com/",
    mlh: "https://events.mlh.io/events/13395-hackday-butwal",
    projects: "https://butwal.devpost.com/project-gallery",
    maps: "https://www.google.com/maps/search/?api=1&query=Lumbini+World+School+Tilottama",
  },
  social: {
    instagram: "https://www.instagram.com/butwalhacks/",
    linkedin: "https://www.linkedin.com/company/butwalhacks/",
    github: "https://github.com/Prarambha369/Butwal-Hacks",
  },
  contact: {
    support: "support@butwalhacks.com",
    sponsorship: "mail@butwalhacks.com",
  },
} as const;
