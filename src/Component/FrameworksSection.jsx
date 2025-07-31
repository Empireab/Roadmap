import React from 'react';
import './FrameworksSection.css';

const FrameworksSection = () => {
  return (
    <section id="frameworks" className="frameworks-section">
      <h2 className="frameworks-heading">Frameworks</h2>
      <p className="frameworks-text">
        In frontend development, frameworks help you build faster and with better structure.
      </p>
      <ul className="frameworks-list">
        <li>🚀 Tailwind CSS – Utility-first and easy to customize</li>
        <li>🎨 Bootstrap – Popular, responsive components out of the box</li>
        <li>🧱 Material UI – Google's design system in React</li>
        <li>⚡️ Learn how to use Github</li>
        <li>🖇️ Learn how to host a website</li>
        <li>And a lot more</li>
      </ul>
    </section>
  );
};

export default FrameworksSection;
