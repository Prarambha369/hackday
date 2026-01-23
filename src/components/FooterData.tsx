import React from "react";
import { socialLinks } from "../data/sampleData";

const FooterData: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 text-center">
      <p>&copy; 2026 HackDay Butwal. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href={socialLinks.twitter} className="hover:underline">Twitter</a>
        <a href={socialLinks.discord} className="hover:underline">Discord</a>
        <a href={socialLinks.facebook} className="hover:underline">Facebook</a>
        <a href={socialLinks.linkedin} className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
};

export default FooterData;
