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
  let pathname = window.location.pathname;

  const basePath = "/science-spirituality-foundation";

  // Remove GitHub Pages project path when running on github.io
  if (pathname === basePath) {
    pathname = "/";
  } else if (pathname.startsWith(`${basePath}/`)) {
    pathname = pathname.slice(basePath.length);
  }

  // Remove trailing slash except for homepage
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
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

  // Certificates page
  if (currentPath === "/certificates") {
    return (
      <div className="App">
        <Navbar />

        <Certificates />

        <Footer />
      </div>
    );
  }

  // Service pages
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

  // Homepage
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
