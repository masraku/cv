import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portofolio</h2>
          <p>Below are the projects I have worked on</p>
        </div>

        <div className="row portfolio-container" data-aos="zoom-in" data-aos-delay="100">
          {/* Proyek Website MarketPlace */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-delay="100">
              <Image
                src="/assets/image/web2.png"
                className="img-fluid"
                alt="Marketplace"
                width={500}
                height={300}
              />
              <div className="portfolio-info">
                <h4>Marketplace</h4>
                <p>Website Markeplace</p>
                <div className="portfolio-links">
                  <a
                    href="/assets/image/web2.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Website"
                  >
                    <i className="bx bx-search"></i>
                  </a>
                  <a
                    href="https://github.com/masraku/Marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Kunjungi"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyek Food Order */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-delay="100">
              <Image
                src="/assets/image/android.png"
                className="img-fluid"
                alt="Android Mobile"
                width={500}
                height={300}
              />
              <div className="portfolio-info">
                <h4>Android Studio App</h4>
                <p>Delivery Order App with Android Studio</p>
                <div className="portfolio-links">
                  <a
                    href="/assets/image/android.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App"
                  >
                    <i className="bx bx-search"></i>
                  </a>
                  <a
                    href="https://github.com/masraku/TB2-Android-Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Kunjungi"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyek Eventku */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap" data-aos="zoom-in" data-aos-delay="100">
              <Image
                src="/assets/image/android.png"
                className="img-fluid"
                alt="Android Mobile"
                width={500}
                height={300}
              />
              <div className="portfolio-info">
                <h4>Eventku by Mikseru</h4>
                <p>Website to find all idol event in Jabodetabek</p>
                <div className="portfolio-links">
                  <a
                    href="/assets/image/eventku.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App"
                  >
                    <i className="bx bx-search"></i>
                  </a>
                  <a
                    href="https://mikseru.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Kunjungi"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
