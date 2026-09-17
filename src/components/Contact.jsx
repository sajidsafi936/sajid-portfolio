import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const addReveal = useScrollReveal();

  const handleSend = () => {
    alert('Message sent! (Update this with your backend)');
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="reveal" ref={addReveal}>
          <div className="contact-headline">
            LET'S<br />
            <span className="outline">CONNECT</span>
          </div>
          <p className="contact-text">
            I'm always open to new opportunities, collaborations, or just a chat about tech. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:sajidsafi396@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              sajidsafi396@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sajid-ullah-8b6668350/" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">in</div>
              sajid ullah
            </a>
            <a href="https://github.com/sajidsafi936" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">⌥</div>
              https://github.com/sajidsafi936
            </a>
          </div>
        </div>
        <div className="contact-form reveal reveal-delay-2" ref={addReveal}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start' }}
            onClick={handleSend}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}