'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Developer',
        'IT Enthusiast',
        'Informathic Engineering Student',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    return () => {
      // Destroy instance on unmount
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <h1>Laksmana Rakho Marzendra</h1>
        <p>
          I&apos;m <span ref={typedRef} className="typed"></span>
        </p>
        <div className="social-links">
          <a
            href="https://api.whatsapp.com/send?phone=6282146150660&text="
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://github.com/masraku"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/masrakuuu/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/laksmana-rakho-53a9b0245/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div>
          <a
            href="./cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn btn-15"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
