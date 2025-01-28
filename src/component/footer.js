"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { DiIonic } from "react-icons/di";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold">Get in Touch!</h3>
        <div className="social-links flex justify-center gap-4 mt-4">
          <a href="https://github.com/masraku" target="_blank" rel="noopener noreferrer" className="github">
            <BsGithub size={24} className="hover:text-blue-500" />
          </a>
          <a href="https://x.com/MasRakuuu" target="_blank" rel="noopener noreferrer" className="instagram">
            <BsInstagram size={24} className="hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com/in/laksmana-rakho-53a9b0245/" target="_blank" rel="noopener noreferrer" className="linkedin">
            <BsLinkedin size={24} className="hover:text-blue-700" />
          </a>
        </div>
        <div className="copyright mt-6">
          <strong>
            <Link href="">Laksmana Rakho</Link>
          </strong>
        </div>
      </div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <DiIonic size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
