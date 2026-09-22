import React from "react";

const BASE_PATH = window.location.hostname.endsWith("github.io")
  ? "/science-spirituality-foundation"
  : "";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* ABOUT THE FOUNDATION */}

        <div className="about-content">
          <p className="section-tag">ABOUT THE FOUNDATION</p>

          <h2>
            A Journey Towards
            <span> Inner Awareness</span>
          </h2>

          <p>
            Science & Spirituality Foundation is a platform dedicated to
            exploring consciousness, spirituality, self-discovery and holistic
            wellbeing.
          </p>

          <p>
            Through different spiritual and complementary practices, individuals
            can explore their inner world, understand themselves more deeply and
            work towards personal growth.
          </p>

          <p>
            Our approach brings together traditional spiritual practices with
            curiosity, awareness and a thoughtful exploration of human
            consciousness.
          </p>

          <a href="#services" className="about-button">
            Explore Our Services
          </a>
        </div>

        {/* FOUNDER PROFILE */}

        <div className="founder-profile">
          <div className="founder-image-wrapper">
            <img
              src={`${BASE_PATH}/founder-photo-website.jpg`}
              alt="Pratyush Kumar Panigrahi - Founder, Science & Spirituality Foundation"
              className="founder-image"
            />
          </div>

          <div className="founder-profile-content">
            <p className="section-tag">MEET THE FOUNDER</p>

            <h2>
              Pratyush Kumar
              <span> Panigrahi</span>
            </h2>

            <p className="founder-title">
              Founder — Science & Spirituality Foundation
            </p>

            <p className="founder-credentials">
              Reiki Master&nbsp; | &nbsp;MNI (USA) Recognised
              <br />
              Past Life Regression & Transpersonal Hypnotherapist
              <br />
              Dowsing Specialist&nbsp; | &nbsp;Fingerprint Analyst
            </p>

            <p>
              The founder brings together multiple approaches to healing,
              consciousness, self-exploration and personal development. His
              areas of practice include Reiki, Dowsing, Past Life Regression,
              Transpersonal Hypnotherapy and Fingerprint Analysis.
            </p>

            <p>
              He is MNI (USA) recognised in Past Life Regression and
              Transpersonal Hypnotherapy. Through Science & Spirituality
              Foundation, the intention is to create a space where people can
              explore themselves through different perspectives — combining
              knowledge, personal experience, inner awareness and practical
              self-development.
            </p>

            <p>
              The approach is not about asking people to blindly accept a
              belief. It is about encouraging people to explore, question,
              experience and develop their own understanding.
            </p>
          </div>
        </div>

        {/* MESSAGE FROM THE FOUNDER */}

        <div className="founder-message">
          <div className="founder-message-heading">
            <p className="section-tag">MESSAGE FROM THE FOUNDER</p>

            <h2>
              Explore. Question.
              <span> Experience. Grow.</span>
            </h2>
          </div>

          <div className="founder-message-content">
            <p>
              I believe that every individual carries within themselves a unique
              combination of abilities, experiences, questions and
              possibilities.
            </p>

            <p>
              Our journey through life is not only about achieving external
              success. It is also about understanding who we are, why we think
              and behave the way we do, what gives our life meaning, and what
              potential lies within us.
            </p>

            <p>
              Science & Spirituality Foundation was created with the intention
              of providing a space for this exploration.
            </p>

            <p>
              Here, we bring together different approaches to personal
              development, healing, consciousness and self-exploration. Whether
              you are looking for greater inner balance, exploring spirituality,
              trying to understand recurring patterns, discovering your
              potential, or simply searching for a clearer direction in life,
              your journey begins with a question.
            </p>

            <p>
              I do not believe that there is one path that is right for
              everyone. Each person has to explore, experience and discover what
              resonates with them.
            </p>

            <p>
              My role is not to tell you who you are or what your life must
              become. My role is to provide guidance, tools and a space where
              you can explore yourself more deeply.
            </p>

            <p>
              I invite you to stay curious. Ask questions. Explore different
              perspectives. Experience for yourself. And most importantly,
              continue growing.
            </p>

            <p className="founder-signature">
              — Pratyush Kumar Panigrahi
              <span>Founder, Science & Spirituality Foundation</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
