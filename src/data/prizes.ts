/**
 * Prize and winner data, from the official Devpost listing
 * (https://butwal.devpost.com, project gallery), fetched 2026-11-19.
 * Amounts are shown in the currency Devpost lists (₹).
 */
export interface Winner {
  project: string;
  url: string;
}

export interface Prize {
  title: string;
  /** Cash amount, already formatted. */
  cash?: string;
  reward: string;
  winner?: Winner;
}

export const PRIZE_POOL = "₹22,221+";
export const PROJECT_COUNT = 16;

const project = (name: string, slug: string): Winner => ({
  project: name,
  url: `https://devpost.com/software/${slug}`,
});

export const PODIUM: (Prize & { place: string; emoji: string })[] = [
  {
    place: "1st Prize",
    emoji: "🥇",
    title: "1st Prize",
    cash: "₹11,111",
    reward: "Cash, resources and event swag, plus 3 months of ElevenLabs Pro for every team member",
    winner: project("Swasthya Sathi – Healthcare Journey Manager", "swasthya-sathi-healthcare-journey-manager"),
  },
  {
    place: "2nd Prize",
    emoji: "🥈",
    title: "2nd Prize",
    cash: "₹7,777",
    reward: "Cash, resources and event swag",
    winner: project("CodeMentor", "codementor-0iqdh8"),
  },
  {
    place: "3rd Prize",
    emoji: "🥉",
    title: "3rd Prize",
    cash: "₹3,333",
    reward: "Cash, resources and event swag",
    winner: project("Sanket", "sanket-vtan45"),
  },
];

export const SPECIAL_PRIZES: Prize[] = [
  {
    title: "Best Use of Gemini API",
    reward: "Google swag",
    winner: project("Pet Care", "pet-care-uj1xb6"),
  },
  {
    title: "Best Project Built with ElevenLabs",
    reward: "6 months of ElevenLabs Scale Tier for each team member",
    winner: project("civic sewa", "civic-sewa"),
  },
];

/** Perks every participating team received. */
export const PARTICIPANT_PERKS: Prize[] = [
  { title: "ElevenLabs Access", reward: "3 months of ElevenLabs Creator Tier" },
  { title: "Domain Access", reward: "A .xyz domain (up to $10) to put projects on the web" },
];
