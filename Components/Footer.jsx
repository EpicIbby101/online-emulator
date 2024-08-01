import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white w-full py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2024 Kevin Grittner. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <a
              href="/about"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
          <p className="text-sm">
            Artwork and games are copyright to their respective owners.
            MyChildhoodGames is NOT endorsed or sponsored by Nintendo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
