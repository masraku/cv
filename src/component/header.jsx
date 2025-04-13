import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="#certificates" className="nav-link scrollto">
                <i className="bx bx-file"></i> <span>Certificates</span>
              </Link>
            </li>
            <li>
              <Link href="#skills" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Skills</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
