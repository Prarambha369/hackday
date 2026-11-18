/** Judges and judging criteria, as listed on https://butwal.devpost.com. */
export interface Judge {
  name: string;
  org: string;
}

export const JUDGES: Judge[] = [
  { name: "Vishal Shrestha", org: "iCAN Education Services" },
  { name: "Gaurav Giri", org: "NotionKec" },
  { name: "Madhav Poudel", org: "CSIT Association of Nepal, Rupandehi" },
];

export const JUDGING_CRITERIA = ["Problem-Solving", "Designing", "Presentation", "Creativity", "Concept"];
