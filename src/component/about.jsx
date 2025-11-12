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
                        Undergraduated at Mercu Buana University
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
              Dynamic administrative professional with three years of experience in stock management and
              procurement, driving operational efficiency and accuracy. Proficient in Microsoft Office, alongside
              foundational programming skills, enhances problem-solving capabilities and streamlines workflows.
              Known for exceptional organizational skills and adaptability, fostering effective collaboration in fast-
              paced environments. Eager to transition into web programming, leveraging a solid foundation in
              informatics engineering and a passion for technology to contribute to innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
