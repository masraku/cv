'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Web Developer who builds real-world systems',
        'Building public service & job platform websites',
        'Helping startups and clients turn ideas into working products',
      ],
      typeSpeed: 45,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <h1>
          I build web systems <br /> that actually get used
        </h1>

        <p className="mt-3">
          I&apos;m{' '}
          <span ref={typedRef} className="typed fw-semibold"></span>
        </p>

        <p className="text-muted mt-2">
          Built public complaint and job-seeking platforms for local government institutions.
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

        <div className="mt-4">
          <Link
            href={certificate.imgSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-lightbox"
          >
            <i className="bx bx-search"></i>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
