'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row">
          {/* Gambar Profil */}
          <div className="col-lg-4">
            <Image
              src="/assets/image/profile.jpg"
              alt="Profile"
              width={300}
              height={400}
              className="img-fluid"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Konten Profil */}
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Informathic Engineering Student &amp; IT Enthusiast</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <span>
                      <Link href="https://masraku.site" target="_blank">
                        masraku.site
                      </Link>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>
                    <span>
                      <Link
                        href="https://api.whatsapp.com/send?phone=6282146150660&text="
                        target="_blank"
                      >
                        0821 4615 0660
                      </Link>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>
                    <span>
                      <Link href="https://mercubuana.ac.id/" target="_blank">
                        Undergraduated IS
                      </Link>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>
                      <Link href="mailto:laksmanarakho@gmail.com">
                        laksmanarakho@gmail.com
                      </Link>
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p style={{ textAlign: 'justify' }}>
              I am an Informatics Engineering student who is passionate about delving into coding
              and software testing. Throughout this learning journey, I am committed to honing my
              skills to become an expert in developing reliable and high-quality software
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
