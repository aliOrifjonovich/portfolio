import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from "components/UI/Footer/Footer";
import { Header } from "components/UI/Header/Header";

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
}
