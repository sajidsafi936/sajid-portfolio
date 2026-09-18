import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useScrollReveal from '../hooks/useScrollReveal.js';
import './Contact.css';

const SERVICE_ID = 'service_ypooqaf';
const TEMPLATE_ID = 'template_7f2jnga';
const PUBLIC_KEY = 'zP_H-vYI-GMBu8H9M';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const addReveal = useScrollReveal();

  const handleSend = () => {
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error?.text || error);
        setStatus('error');
      });
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
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>
          {status === 'sent' && (
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>
              Message sent — thanks for reaching out!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff4d4d', fontSize: '0.85rem' }}>
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}