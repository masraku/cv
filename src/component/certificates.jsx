import Image from 'next/image';
import Link from 'next/link';


export default function Certificates() {
  const certificates = [
    {
      imgSrc: '/assets/certificates/1.jpg',
    },
    {
      imgSrc: '/assets/certificates/2.jpg',
    },
    {
      imgSrc: '/assets/certificates/3.jpg',
    },
    {
      imgSrc: '/assets/certificates/4.jpg',
    },
    {
      imgSrc: '/assets/certificates/5.jpg',
    },
    {
      imgSrc: '/assets/certificates/6.jpg',
    },
    {
       imgSrc: '/assets/certificates/7.jpg',
    },
    {
       imgSrc: '/assets/certificates/8.jpg',
    },
    {
       imgSrc: '/assets/certificates/9.jpg',
    },
  ];

  return (
    <section id="certificates" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Certificates</h2>
          <p>Berikut adalah sertifikat yang telah diraih.</p>
        </div>

        <div className="row portfolio-container" data-aos="zoom-in" data-aos-delay="100">
          {certificates.map((certificate, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <Image
                  src={certificate.imgSrc}
                  alt={`Certificate ${index + 1}`}
                  className="img-fluid"
                  width={400}
                  height={300}
                />
                <div className="portfolio-info">
                  <div className="portfolio-links">
                    <Link href={certificate.imgSrc} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="portfolio-lightbox">
                        <i className="bx bx-search"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
