import React from "react";

const certificates = [
  {
    title: "Advanced Reiki Healer",
    category: "Certificate",
    organisation: "Reiki Healing Foundation",
    date: "22–23 August 2026",
    code: "R.H.F. Code: DL/AUG/7595",
    image: "/certificate-2-advanced-reiki-healer.jpg",
  },
  {
    title: "Reiki & Mind Power Course",
    category: "Membership & Course",
    organisation: "Reiki Healing Foundation",
    date: "22–23 August 2026",
    code: "Regn. No.: DL/AUG/7595",
    image: "/certificate-1-reiki-membership.jpg",
  },
];

const Certificates: React.FC = () => {
  return (
    <main className="certificates-page">
      <style>
        {`
          /* =====================================================
             CERTIFICATE DISPLAY
             ===================================================== */

          .certificates-page .certificates-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 45px;
            align-items: start;
          }

          .certificates-page .certificate-card {
            width: 100%;
            min-width: 0;
          }

          .certificates-page .certificate-image-wrapper {
            width: 100%;
            height: auto !important;
            min-height: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            box-sizing: border-box;
            overflow: visible !important;
          }

          .certificates-page .certificate-image {
            display: block;
            width: 100% !important;
            height: auto !important;
            max-width: 100%;
            max-height: none !important;
            object-fit: contain;
          }

          .certificates-page .certificate-card-content {
            margin-top: 18px;
          }

          .certificates-page .certificate-category {
            display: inline-block;
            margin-bottom: 10px;
          }

          .certificates-page .certificate-card-content h3 {
            margin-bottom: 10px;
          }

          .certificates-page .certificate-organisation {
            margin-bottom: 12px;
          }

          .certificates-page .certificate-meta {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .certificates-page .certificate-meta span {
            display: block;
          }

          @media (max-width: 700px) {
            .certificates-page .certificates-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .certificates-page .certificate-image-wrapper {
              padding: 5px;
            }
          }
        `}
      </style>

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="certificates-hero">
        <div className="certificates-hero-inner">
          <p className="certificates-eyebrow">CREDENTIALS & RECOGNITION</p>

          <h1>
            Certificates &<span> Achievements</span>
          </h1>

          <p>
            A record of professional training, certifications, memberships and
            learning milestones that form part of the journey of Science &
            Spirituality Foundation.
          </p>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATES SECTION
          ===================================================== */}

      <section className="certificates-section">
        <div className="certificates-container">
          <div className="certificates-intro">
            <p className="section-tag">PROFESSIONAL JOURNEY</p>

            <h2>
              Learning, Recognition &<span> Continuous Growth</span>
            </h2>

            <p>
              This page will continue to grow as new certifications,
              memberships, courses and professional recognitions are received.
            </p>
          </div>

          {/* =================================================
              CERTIFICATE GRID
              ================================================= */}

          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.title}>
                {/* CERTIFICATE IMAGE */}

                <div className="certificate-image-wrapper">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} - ${certificate.organisation}`}
                    className="certificate-image"
                  />
                </div>

                {/* CERTIFICATE INFORMATION */}

                <div className="certificate-card-content">
                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p className="certificate-organisation">
                    {certificate.organisation}
                  </p>

                  <div className="certificate-meta">
                    <span>{certificate.date}</span>

                    <span>{certificate.code}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* =================================================
              FUTURE ACHIEVEMENTS
              ================================================= */}

          <div className="certificates-future">
            <div className="certificates-future-number">+</div>

            <div>
              <h3>More Achievements to Come</h3>

              <p>
                New certificates, professional training and recognitions will be
                added here as the journey continues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Certificates;
