import React, { useState } from "react";

const WHATSAPP_NUMBER = "918328909832";

const WHATSAPP_MESSAGE = `Hello Science & Spirituality Foundation,

I would like to enquire about a session.

Please share the available services, timings and session details.

Thank you.`;

const BASE_PATH = window.location.hostname.endsWith("github.io")
  ? "/science-spirituality-foundation"
  : "";

const openWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  window.location.href = whatsappUrl;
};

const navigateTo = (path: string) => {
  window.history.pushState({}, "", `${BASE_PATH}${path}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    navigateTo(path);

    const hashIndex = path.indexOf("#");

    if (hashIndex !== -1) {
      const hash = path.substring(hashIndex);

      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  const handleWhatsAppClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    openWhatsApp();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href={`${BASE_PATH}/`}
          className="navbar-logo"
          onClick={(event) => handleNavigation(event, "/")}
        >
          <img
            src={`${BASE_PATH}/ssf-logo.webp`}
            alt="Science & Spirituality Foundation"
            className="navbar-logo-image"
          />

          <div className="navbar-logo-text">
            <span className="logo-main">Science & Spirituality</span>
            <span className="logo-sub">Foundation</span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">

          <a
            href={`${BASE_PATH}/`}
            onClick={(event) => handleNavigation(event, "/")}
          >
            Home
          </a>

          <a
            href={`${BASE_PATH}/#about`}
            onClick={(event) => handleNavigation(event, "/#about")}
          >
            About
          </a>

          <a
            href={`${BASE_PATH}/#services`}
            onClick={(event) => handleNavigation(event, "/#services")}
          >
            Services
          </a>

          <a
            href={`${BASE_PATH}/certificates`}
            onClick={(event) =>
              handleNavigation(event, "/certificates")
            }
          >
            Certificates
          </a>

          <a
            href={`${BASE_PATH}/#testimonials`}
            onClick={(event) =>
              handleNavigation(event, "/#testimonials")
            }
          >
            Testimonials
          </a>

          {/* BOOK A SESSION → WHATSAPP */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            onClick={handleWhatsAppClick}
          >
            Book a Session
          </a>

          <a
            href={`${BASE_PATH}/#contact`}
            onClick={(event) => handleNavigation(event, "/#contact")}
          >
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">

            <a
              href={`${BASE_PATH}/`}
              onClick={(event) => handleNavigation(event, "/")}
            >
              Home
            </a>

            <a
              href={`${BASE_PATH}/#about`}
              onClick={(event) => handleNavigation(event, "/#about")}
            >
              About
            </a>

            <a
              href={`${BASE_PATH}/#services`}
              onClick={(event) =>
                handleNavigation(event, "/#services")
              }
            >
              Services
            </a>

            <a
              href={`${BASE_PATH}/certificates`}
              onClick={(event) =>
                handleNavigation(event, "/certificates")
              }
            >
              Certificates
            </a>

            <a
              href={`${BASE_PATH}/#testimonials`}
              onClick={(event) =>
                handleNavigation(event, "/#testimonials")
              }
            >
              Testimonials
            </a>

            {/* MOBILE BOOK A SESSION → WHATSAPP */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              onClick={handleWhatsAppClick}
            >
              Book a Session
            </a>

            <a
              href={`${BASE_PATH}/#contact`}
              onClick={(event) => handleNavigation(event, "/#contact")}
            >
              Contact
            </a>
          </div>
        )}
      </div>

      {/* MOBILE MENU STYLES */}
      <style>
        {`
          .mobile-menu {
            display: none;
          }

          @media (max-width: 768px) {

            .navbar-container {
              position: relative;
            }

            .navbar-links {
              display: none !important;
            }

            .mobile-menu-button {
              display: flex !important;
              align-items: center;
              justify-content: center;
              width: 44px;
              height: 44px;
              border: none;
              background: transparent;
              color: inherit;
              font-size: 28px;
              cursor: pointer;
              padding: 0;
              z-index: 1002;
            }

            .mobile-menu {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              display: flex;
              flex-direction: column;
              background: #173f2a;
              padding: 12px 20px 20px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
              z-index: 1001;
            }

            .mobile-menu a {
              display: block;
              padding: 14px 10px;
              color: #ffffff;
              text-decoration: none;
              font-size: 16px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            }

            .mobile-menu a:last-child {
              border-bottom: none;
            }

            .mobile-menu a:active {
              opacity: 0.75;
            }
          }

          @media (min-width: 769px) {
            .mobile-menu-button {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
