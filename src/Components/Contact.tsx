import React from "react";

const WHATSAPP_NUMBER = "918328909832";

const Contact: React.FC = () => {
  const handleWhatsAppContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("contact-name") as HTMLInputElement
    )?.value.trim();

    const email = (
      form.elements.namedItem("contact-email") as HTMLInputElement
    )?.value.trim();

    const message = (
      form.elements.namedItem("contact-message") as HTMLTextAreaElement
    )?.value.trim();

    const whatsappMessage = `Hello Science & Spirituality Foundation,

I would like to make an enquiry.

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}

Message:
${message || "I would like to know more about your services."}

Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <p className="section-tag">CONTACT US</p>

          <h2>
            Let's Connect &<span> Begin Your Journey</span>
          </h2>

          <p className="contact-intro-text">
            Have a question about a service, want to understand which session
            may be suitable for you, or simply wish to explore something
            further? We would be happy to hear from you.
          </p>

          <div className="contact-details">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item contact-link"
            >
              <span className="contact-icon">◉</span>

              <div>
                <strong>WhatsApp</strong>
                <p>Chat with us directly</p>
              </div>

              <span className="contact-arrow">→</span>
            </a>

            <div className="contact-item">
              <span className="contact-icon">✉</span>

              <div>
                <strong>Email</strong>
                <p>Our email address will be added here</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⌖</span>

              <div>
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="contact-social-note">
            <span>Stay Connected</span>
            <p>YouTube and other social links will be added here.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-header">
            <p className="form-eyebrow">SEND AN ENQUIRY</p>

            <h3>How Can We Help?</h3>

            <p>
              Send us a message and continue the conversation through WhatsApp.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleWhatsAppContact}>
            <div className="form-group">
              <label htmlFor="contact-name">
                Name <span>*</span>
              </label>

              <input
                id="contact-name"
                name="contact-name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                name="contact-email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                Message <span>*</span>
              </label>

              <textarea
                id="contact-message"
                name="contact-message"
                rows={7}
                placeholder="Tell us what you would like to know..."
                required
              />
            </div>

            <button type="submit" className="contact-button">
              <span>◉</span>
              Send Enquiry on WhatsApp
            </button>

            <p className="contact-form-note">
              We will get back to you with the relevant information and
              available options.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
