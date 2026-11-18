export interface Sponsor {
  name: string;
  role: string;
  /** Path under /public. */
  logo: string;
  featured?: boolean;
  /** Fit the whole logo inside the circle (for wide logos) instead of filling it. */
  contain?: boolean;
}

/** Matches the sponsor list on https://butwal.devpost.com. Logos live in public/sponsors/. Add a sponsor by dropping its logo there and adding an entry. */
export const SPONSORS: Sponsor[] = [
  { name: "Al Qayyoom Biryani", role: "Bronze Sponsor", logo: "/sponsors/al-qayyoom-biryani.png", featured: true },
  { name: "Nayan Eye Care Center", role: "EyeCare Partner", logo: "/sponsors/nayan-eye-care.png" },
  { name: "Major League Hacking", role: "Event Partner", logo: "/sponsors/mlh.jpg" },
  { name: "Lumbini World School", role: "Venue Partner", logo: "/sponsors/lumbini-world-school.png" },
  { name: "Notion", role: "Work Space Partner", logo: "/sponsors/notion.png" },
  { name: "GitHub Education", role: "Education Partner", logo: "/sponsors/github.png" },
  { name: "gen.xyz", role: "Domain Partner", logo: "/sponsors/xyz.png" },
  { name: "Friends Cinemas", role: "Theater Partner", logo: "/sponsors/friends-cinemas.png" },
  { name: "Bhoj Deals", role: "Delivery Partner", logo: "/sponsors/bhoj-deals.png" },
  { name: "Google Developer Groups Kathmandu", role: "Outreach Partner", logo: "/sponsors/gdg-kathmandu.png" },
  { name: "Google Gemini", role: "AI Partner", logo: "/sponsors/google-gemini.png" },
  { name: "iCAN Education Services", role: "Education Partner", logo: "/sponsors/ican-education.png" },
  { name: "Tilottama Municipality", role: "Municipal Partner", logo: "/sponsors/tilottama-nagarpalika.png" },
  { name: "Lumbini Lions", role: "Community Partner", logo: "/sponsors/lumbini-lions.png" },
  { name: "CSIT Association of Nepal, Rupandehi", role: "Community Partner", logo: "/sponsors/csit-rupandehi.png" },
  { name: "CSIT Association of BMC", role: "Community Partner", logo: "/sponsors/csit-bmc.png" },
  { name: "Singapore Beverages Nepal", role: "Sponsor", logo: "/sponsors/singapore-beverages.jpg", contain: true },
  { name: "36 Riverside", role: "Sponsor", logo: "/sponsors/36-riverside.jpg" },
  { name: "Al-Habibi", role: "Sponsor", logo: "/sponsors/al-habibi.png" },
];
