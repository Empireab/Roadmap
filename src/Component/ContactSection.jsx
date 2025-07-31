import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">📞 Contact</h2>
      <p className="contact-text">
        Got questions, feedback, or want to collaborate? Let’s connect!
      </p>
      <div className="contact-buttons">
        <a
  href="https://wa.me/2348062762432?text=Hello%2C%20I%20want%20to%20make%20an%20enquiry.%20My%20name%20is%20..."
  target="_blank"
  rel="noopener noreferrer"
  className="contact-btn whatsapp"
>
  💬 Message on WhatsApp
</a>

        <a
          href="mailto:ab.aghaku@gmail.com"
          className="contact-btn email"
        >
          📧 Send Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
