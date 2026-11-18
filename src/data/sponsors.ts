export interface Sponsor {
  name: string;
  role: string;
  /** Path under /public. */
  logo: string;
  featured?: boolean;
}

/** Logos live in public/sponsors/. Add a sponsor by dropping its logo there and adding an entry. */
export const SPONSORS: Sponsor[] = [
  { name: "Al Qayyoom Biryani", role: "Bronze Sponsor", logo: "/sponsors/al-qayyoom-biryani.png", featured: true },
  { name: "Nayan Eye Care Center", role: "EyeCare Partner", logo: "/sponsors/nayan-eye-care.png" },
  { name: "Major League Hacking", role: "Event Partner", logo: "/sponsors/mlh.jpg" },
  { name: "Lumbini World School", role: "Venue Partner", logo: "/sponsors/lumbini-world-school.png" },
  { name: "Notion", role: "Work Space Partner", logo: "/sponsors/notion.png" },
  { name: "GitHub", role: "Education Partner", logo: "/sponsors/github.png" },
  { name: ".xyz", role: "Domain Partner", logo: "/sponsors/xyz.png" },
  { name: "Friends Cinemas", role: "Theater Partner", logo: "/sponsors/friends-cinemas.png" },
  { name: "Delivery Partner", role: "Delivery Partner", logo: "/sponsors/delivery-partner.png" },
  { name: "Google Developer Groups Kathmandu", role: "Outreach Partner", logo: "/sponsors/gdg-kathmandu.png" },
];
