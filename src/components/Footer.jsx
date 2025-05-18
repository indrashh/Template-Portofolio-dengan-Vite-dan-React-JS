import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/indra.agustyawan",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://twitter.com/indra_agustyawan",
    label: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.youtube.com/c/indraagustyawan",
    label: "YouTube",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.linkedin.com/in/indraagustyawan",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.reddit.com/user/indra_agustyawan",
    label: "Reddit",
    icon: <FaRedditAlien />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="social" className="bg-white shadow mt-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between py-4">
        <p className="text-sm text-gray-600">
          &copy; {currentYear}{" "}
          <span className="font-semibold text-gray-800">Indra Agustyawan</span>.
        </p>
        <ul className="flex items-center gap-4 mt-3 sm:mt-0">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200 text-xl"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
