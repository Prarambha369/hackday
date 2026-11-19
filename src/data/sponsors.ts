/**
 * Sponsors and partners, matching https://butwal.devpost.com.
 * Tiers and roles come from the team's last sponsor update (PR #7) plus organiser corrections.
 * Logos live in public/sponsors/ (square, trimmed and centred so they fill the circle evenly).
 *
 * Tiers decide the logo size on the site, largest first.
 */
export type SponsorTier = "main" | "title" | "silver" | "bronze" | "partner" | "community";

export interface Sponsor {
  name: string;
  role: string;
  logo: string;
  tier: SponsorTier;
}

export const TIERS: { id: SponsorTier; label: string }[] = [
  { id: "main", label: "Main Event Partners" },
  { id: "title", label: "Title Sponsor" },
  { id: "silver", label: "Silver Sponsor" },
  { id: "bronze", label: "Bronze Sponsor" },
  { id: "partner", label: "Partners" },
  { id: "community", label: "Community Partners" },
];

export const SPONSORS: Sponsor[] = [
  { name: "Google Gemini", role: "Main Event Partners", logo: "/sponsors/google-gemini.png", tier: "main" },
  { name: "Major League Hacking", role: "Main Event Partners", logo: "/sponsors/mlh.jpg", tier: "main" },

  { name: "iCAN Education Services", role: "Title Sponsor", logo: "/sponsors/ican-education.png", tier: "title" },
  { name: "Al-Habibi", role: "Silver Sponsor", logo: "/sponsors/al-habibi.png", tier: "silver" },
  { name: "Al Qayyoom Biryani", role: "Bronze Sponsor", logo: "/sponsors/al-qayyoom-biryani.png", tier: "bronze" },

  { name: "Tilottama Municipality", role: "Government Patron", logo: "/sponsors/tilottama-nagarpalika.png", tier: "partner" },
  { name: "Lumbini World School", role: "Venue Partner", logo: "/sponsors/lumbini-world-school.png", tier: "partner" },
  { name: "Notion", role: "Work Space Partner", logo: "/sponsors/notion.png", tier: "partner" },
  { name: "GitHub Education", role: "Education Partner", logo: "/sponsors/github.png", tier: "partner" },
  { name: "gen.xyz", role: "Domain Partner", logo: "/sponsors/xyz.png", tier: "partner" },
  { name: "Friends Cinemas", role: "Theater Partner", logo: "/sponsors/friends-cinemas.png", tier: "partner" },
  { name: "Nayan Eye Care Center", role: "EyeCare Partner", logo: "/sponsors/nayan-eye-care.png", tier: "partner" },
  { name: "Bhoj Deals", role: "Delivery Partner", logo: "/sponsors/bhoj-deals.png", tier: "partner" },
  { name: "Singapore Beverages Nepal", role: "Beverage Partner", logo: "/sponsors/singapore-beverages.jpg", tier: "partner" },
  { name: "36 Riverside", role: "After-party Partner", logo: "/sponsors/36-riverside.jpg", tier: "partner" },

  { name: "Google Developer Groups Kathmandu", role: "Outreach Partner", logo: "/sponsors/gdg-kathmandu.png", tier: "community" },
  { name: "Lumbini Lions", role: "Sports Partner", logo: "/sponsors/lumbini-lions.png", tier: "community" },
  { name: "CSIT Association of Nepal, Rupandehi", role: "Community Partner", logo: "/sponsors/csit-rupandehi.png", tier: "community" },
  { name: "CSIT Association of BMC", role: "Community Partner", logo: "/sponsors/csit-bmc.png", tier: "community" },
];
