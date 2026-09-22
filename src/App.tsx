import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ServicePage from "./Components/ServicePage";
import Certificates from "./Components/Certificates";

import { servicePages } from "./Components/serviceData";

import "./styles.css";

function getAppPath() {
  const pathname = window.location.pathname;

  const basePath = "/science-spirituality-foundation";

  if (pathname.startsWith(basePath)) {
    const path = pathname.slice(basePath.length);
    return path || "/";
  }

  return pathname || "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getAppPath());

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(getAppPath());
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  if (currentPath === "/certificates") {
    return (
      <div className="App">
        <Navbar />
        <Certificates />
        <Footer />
      </div>
    );
  }

  const service = servicePages[currentPath];

  if (service) {
    return (
      <div className="App">
        <Navbar />

        <main>
          <ServicePage
            title={service.title}
            subtitle={service.subtitle}
            sections={service.sections}
          />

          <Booking initialService={service.title} />

          <Contact />
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
