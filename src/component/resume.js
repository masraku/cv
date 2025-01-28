'use client';
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>The following is a history of my education, organization, and work</p>
        </div>
        <div className="row">
          {/* Pendidikan */}
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>S1 Informatic Engineering (On-Going)</h4>
              <h5>2021 - Present</h5>
              <p>
                <em>
                  <a href="https://mercubuana.ac.id/" target="_blank" rel="noopener noreferrer">
                    Mercubuana University
                  </a>
                </em>
              </p>
              <p>GPA: 3.88</p>
            </div>
            <div className="resume-item">
              <h4>Senior High School - Science</h4>
              <h5>2018 - 2021</h5>
              <p>
                <em>
                  <a
                    href="https://smankerjo-kra.sch.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SMA Negeri Kerjo
                  </a>
                </em>
              </p>
              <p>GPA: 88.80</p>
            </div>
          </div>

          {/* Pengalaman Organisasi */}
          <div className="col-lg-6">
            <h3 className="resume-title">Organization Experience</h3>
            <div className="resume-item">
              <h4>Scouting Ambassador Regional Karanganyar</h4>
              <h5>2019</h5>
              <p>
                <em>
                  <a
                    href="https://www.instagram.com/p/B1ZA4R8A-Wb/?img_index=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scouting Ambassador Regional Karanganyar
                  </a>
                </em>
              </p>
              <ul>
                <li>Represented scouts at regional activities</li>
                <li>Designed scouting activities in the Karanganyar region</li>
                <li>Supervised scout activities in Karanganyar</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Head of Activity Scouting Organization SMA Negeri Kerjo</h4>
              <h5>2019 - 2020</h5>
              <p>
                <em>
                  <a
                    href="https://www.instagram.com/p/B3XS_E2hn--/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scouting Organization SMA Negeri Kerjo
                  </a>
                </em>
              </p>
              <ul>
                <li>Designed scouting activities in the school</li>
                <li>Supervised scout activities</li>
                <li>Organized scouting training and knowledge-sharing</li>
              </ul>
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div className="col-lg-6">
            <h3 className="resume-title">Work Experience</h3>
            <div className="resume-item">
              <h4>Admin at PT Guna Maju Bersama</h4>
              <h5>2021 - 2023</h5>
              <p>
                <em>
                  <a
                    href="https://www.tokopedia.com/muliaberkat?source=universe&st=product"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin and Warehouse Staff
                  </a>
                </em>
              </p>
              <ul>
                <li>Monitored stock in and out</li>
                <li>Performed stock opname</li>
                <li>Packed stock</li>
                <li>Created PO (Purchase Order)</li>
                <li>Created PR (Purchase Request)</li>
                <li>Created BAST (Berita Acara Serah Terima)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
