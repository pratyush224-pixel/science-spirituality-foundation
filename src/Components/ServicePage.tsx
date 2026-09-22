import React from "react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  sections: any[];
}

const BASE_PATH = window.location.hostname.endsWith("github.io")
  ? "/science-spirituality-foundation"
  : "";

const reikiConcerns = [
  "Stress & Anxiety",
  "Headaches & Migraines",
  "Sleep Problems / Insomnia",
  "Neck & Back Pain",
  "Joint Pain",
  "Digestive Problems",
  "Fatigue & Low Energy",
  "Emotional Stress",
  "Concentration & Mental Clarity",
  "Work & Study Pressure",
  "Relationship & Emotional Wellbeing",
  "Grief & Emotional Healing",
  "Self-Confidence & Inner Balance",
  "Women's Wellness",
  "Chronic Pain & General Discomfort",
  "Relaxation & Inner Peace",
  "Personal Growth & Self-Discovery",
  "Any Other Problem",
];

const dowsingAreas = [
  "Water Source Exploration",
  "Land & Property",
  "Home & Space Energy",
  "Personal Energy",
  "Wellness & Balance",
  "Object & Environmental Checking",
  "Lost Person",
  "Lost Things",
  "Decision Guidance",
  "Energy Blockage Exploration",
  "Space Harmony",
  "Any Other Enquiry",
];

const pastLifeAreas = [
  "Womb Regression",
  "Early Life Regression",
  "Past Life Exploration",
  "Soul Purpose & Lessons",
  "Relationships & Soul Connections",
  "Life Between Lives",
  "Karmic Patterns",
  "Future Possibilities",
  "Inner Child Healing",
  "Guidance & Messages",
  "Decision Support",
  "Any Other Enquiry",
];

const chakraAreas = [
  "Root Chakra",
  "Sacral Chakra",
  "Solar Plexus Chakra",
  "Heart Chakra",
  "Throat Chakra",
  "Third Eye Chakra",
  "Crown Chakra",
  "Full Chakra Scan",
  "Chakra Balancing",
  "Chakra Cleansing",
  "Energy Blockage Exploration",
  "Any Other Enquiry",
];

const spiritualAreas = [
  "Aura Cleansing",
  "Energy Healing",
  "Chakra Balance",
  "Chakra Scan",
  "24 Organ Energy Scan",
  "Energy Blockage Exploration",
  "Emotional Balance",
  "Inner Peace & Relaxation",
  "Meditation & Mindfulness",
  "Personal Energy Awareness",
  "Spiritual Growth",
  "Any Other Enquiry",
];

const meditationAreas = [
  "Stress Relief",
  "Anxiety Management",
  "Improved Concentration",
  "Better Sleep",
  "Emotional Balance",
  "Inner Peace",
  "Mindfulness Practice",
  "Focus & Productivity",
  "Self-Awareness",
  "Breathing & Relaxation",
  "Personal Growth",
  "Guided Meditation",
];

const manifestationAreas = [
  "Setting Clear Intentions",
  "Positive Thinking",
  "Visualization",
  "Affirmations",
  "Raising Positive Energy",
  "Overcoming Limiting Beliefs",
  "Self-Confidence",
  "Goal Clarity",
  "Aligned Action",
  "Personal Growth",
  "Abundance Mindset",
  "Creating a Positive Life",
];

const fingerprintAreas = [
  "Personality Understanding",
  "Natural Talents",
  "Strengths & Potential",
  "Learning Style",
  "Career Guidance",
  "Academic Guidance",
  "Leadership Potential",
  "Communication Style",
  "Decision-Making Style",
  "Personal Development",
  "Youth Guidance",
  "Life Direction",
];

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  sections,
}) => {
  const titleLower = title.toLowerCase();

  const isReiki = titleLower === "reiki healing";

  const isDowsing = titleLower === "dowsing";

  const isPastLife =
    titleLower === "past life regression" || titleLower === "past life";

  const isChakra =
    titleLower === "chakra wellness" || titleLower === "chakra healing";

  const isSpiritual =
    titleLower === "spiritual wellness" ||
    titleLower === "spiritual healing" ||
    titleLower === "spiritual wellness & healing";

  const isMeditation =
    titleLower === "meditation" || titleLower === "meditation & mindfulness";

  const isManifestation =
    titleLower === "manifestation" || titleLower === "manifestation coaching";

  const isFingerprint =
    titleLower === "fingerprint analysis" ||
    titleLower === "fingerprinting" ||
    titleLower === "fingerprint reading";

  /*
   * Every service concern/area tab goes directly
   * to the enquiry form.
   */
  const scrollToBooking = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
      bookingForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="service-page">
      <style>
        {`
          .service-page .service-image-hero {
            width: 100%;
            overflow: hidden;
            background: #0d2f20;
            line-height: 0;
          }

          .service-page .service-hero-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: cover;
          }

          .service-page .service-page-content {
            position: relative;
            z-index: 2;
            line-height: normal;
          }

          .service-page .service-page-section {
            max-width: 1100px;
            margin: 0 auto;
            padding: 55px 25px;
          }

          .service-page .service-page-section h2 {
            margin-bottom: 20px;
          }

          .service-page .service-page-section p {
            line-height: 1.8;
          }

          .service-tabs-section {
            width: 100%;
            padding: 70px 4%;
            text-align: center;
          }

          .service-tabs-heading {
            margin-bottom: 42px;
          }

          .service-tabs-heading h2 {
            margin-bottom: 12px;
          }

          .service-tabs-heading p {
            max-width: 750px;
            margin: 0 auto;
            line-height: 1.7;
          }

          .service-tabs-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .service-tab-card {
            min-height: 125px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 22px;
            border-radius: 18px;
            text-decoration: none;
            background: linear-gradient(
              135deg,
              #ffffff,
              #f8f3fb
            );
            border: 1px solid rgba(112, 79, 145, 0.12);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
            cursor: pointer;
          }

          .service-tab-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
            border-color: rgba(112, 79, 145, 0.35);
          }

          .service-tab-name {
            font-size: 1.12rem;
            font-weight: 600;
            color: #3f3151;
            line-height: 1.45;
          }

          .service-page-actions {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 18px;
            padding: 35px 20px 70px;
            flex-wrap: wrap;
          }

          .service-page-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 28px;
            border-radius: 30px;
            text-decoration: none;
            background: #0d2f20;
            color: #ffffff;
            font-weight: 600;
          }

          .service-page-button.secondary {
            background: transparent;
            color: #0d2f20;
            border: 1px solid #0d2f20;
          }

          @media (max-width: 900px) {
            .service-tabs-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 20px;
            }
          }

          @media (max-width: 600px) {
            .service-tabs-section {
              padding: 50px 5%;
            }

            .service-tabs-grid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .service-tab-card {
              min-height: 105px;
              padding: 22px 18px;
            }

            .service-tab-name {
              font-size: 1.05rem;
            }
          }
        `}
      </style>

      {/* =========================
          HERO IMAGES
          ========================= */}

      {isReiki && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/reiki-healing.webp`}
            alt="Reiki Healing"
            className="service-hero-image"
          />
        </section>
      )}

      {isDowsing && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/dowsing.webp`}
            alt="Dowsing"
            className="service-hero-image"
          />
        </section>
      )}

      {isPastLife && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/past-life-regression.webp`}
            alt="Past Life Regression"
            className="service-hero-image"
          />
        </section>
      )}

      {isChakra && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/chakra-wellness.webp`}
            alt="Chakra Wellness"
            className="service-hero-image"
          />
        </section>
      )}

      {isSpiritual && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/spiritual-wellness.webp`}
            alt="Spiritual Wellness"
            className="service-hero-image"
          />
        </section>
      )}

      {isMeditation && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/meditation.webp`}
            alt="Meditation"
            className="service-hero-image"
          />
        </section>
      )}

      {isManifestation && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/manifestation.webp`}
            alt="Manifestation"
            className="service-hero-image"
          />
        </section>
      )}

      {isFingerprint && (
        <section className="service-image-hero">
          <img
            src={`${BASE_PATH}/fingerprint-analysis.webp`}
            alt="Fingerprint Analysis"
            className="service-hero-image"
          />
        </section>
      )}

      {!isReiki &&
        !isDowsing &&
        !isPastLife &&
        !isChakra &&
        !isSpiritual &&
        !isMeditation &&
        !isManifestation &&
        !isFingerprint && (
          <section className="service-page-hero">
            <div className="service-page-hero-inner">
              <p className="service-page-label">
                SCIENCE & SPIRITUALITY FOUNDATION
              </p>

              <h1>{title}</h1>

              <p>{subtitle}</p>
            </div>
          </section>
        )}

      {/* =========================
          EXISTING WRITTEN CONTENT
          ========================= */}

      <div className="service-page-content">
        {sections.map((section, index) => (
          <section className="service-page-section" key={index}>
            {section.title && <h2>{section.title}</h2>}

            {section.heading && <h2>{section.heading}</h2>}

            {typeof section.content === "string" && <p>{section.content}</p>}

            {Array.isArray(section.content) &&
              section.content.map(
                (paragraph: string, paragraphIndex: number) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                )
              )}

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map(
                (paragraph: string, paragraphIndex: number) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                )
              )}

            {Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul>
                {section.bullets.map((bullet: string, bulletIndex: number) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <div className="service-page-note">{section.note}</div>
            )}
          </section>
        ))}

        {/* =========================
            REIKI TABS
            ========================= */}

        {isReiki && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>Are You Facing Any of These?</h2>

              <p>
                Explore Reiki as a complementary practice for relaxation,
                emotional wellbeing, self-awareness and personal balance.
              </p>
            </div>

            <div className="service-tabs-grid">
              {reikiConcerns.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            DOWSING TABS
            ========================= */}

        {isDowsing && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>Select an area below to enquire about a dowsing session.</p>
            </div>

            <div className="service-tabs-grid">
              {dowsingAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            PAST LIFE TABS
            ========================= */}

        {isPastLife && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Select an area below to enquire about a Past Life Regression
                session.
              </p>
            </div>

            <div className="service-tabs-grid">
              {pastLifeAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            CHAKRA TABS
            ========================= */}

        {isChakra && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>Explore Your Chakra System</h2>

              <p>
                Explore the seven major chakras and different approaches to
                chakra awareness, cleansing and energetic wellbeing.
              </p>
            </div>

            <div className="service-tabs-grid">
              {chakraAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            SPIRITUAL WELLNESS TABS
            ========================= */}

        {isSpiritual && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Explore different approaches to energy, awareness, relaxation
                and spiritual wellbeing.
              </p>
            </div>

            <div className="service-tabs-grid">
              {spiritualAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            MEDITATION TABS
            ========================= */}

        {isMeditation && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Choose an area of meditation and mindfulness practice that
                matches your present needs and goals.
              </p>
            </div>

            <div className="service-tabs-grid">
              {meditationAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            MANIFESTATION TABS
            ========================= */}

        {isManifestation && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Explore practical approaches to intention, mindset,
                visualization, positive thinking and aligned action.
              </p>
            </div>

            <div className="service-tabs-grid">
              {manifestationAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            FINGERPRINT ANALYSIS TABS
            ========================= */}

        {isFingerprint && (
          <section className="service-tabs-section">
            <div className="service-tabs-heading">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Fingerprint analysis can be used as a self-discovery and
                guidance tool to explore individual patterns, strengths, talents
                and potential.
              </p>
            </div>

            <div className="service-tabs-grid">
              {fingerprintAreas.map((item) => (
                <a
                  key={item}
                  href="#booking-form"
                  className="service-tab-card"
                  onClick={scrollToBooking}
                >
                  <div className="service-tab-name">{item}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            BOOKING BUTTONS
            ========================= */}

        <div className="service-page-actions">
          <a
            href="#booking-form"
            className="service-page-button"
            onClick={scrollToBooking}
          >
            Book a Session
          </a>

          <a href="/#contact" className="service-page-button secondary">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
