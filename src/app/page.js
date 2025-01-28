"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from '@/component/header';
import Wave from '@/component/wave';
import Hero from '@/component/hero';
import About from '@/component/about';
import Resume from '@/component/resume';
import { useEffect } from 'react';
import Portfolio from '@/component/portofolio';
import Certificates from '@/component/certificates';
import Skills from '@/component/skills';
import Footer from '@/component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/style/globals.css";
import 'boxicons/css/boxicons.min.css';
import '@/style/glightbox.min.css';
import React from 'react';





function MyApp({Component, pageProps}) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div>
        <Header />
        <Wave />
        <Hero />
      <main id="main">
        <About />
        <Resume />
        <Portfolio />
        <Certificates />
        <Skills />
        <br /><br /><br /><br />
      </main>
        <Footer />
    </div>
  );
}

export default MyApp;