import useScrollReveal from '../hooks/useScrollReveal.js';
import './About.css';

const stats = [
  { num: '2+', label: 'Years Coding' },
  { num: '5+', label: 'Projects Built' },
  { num: '5+', label: 'Technologies' },
  { num: '∞', label: 'Curiosity' },
];

export default function About() {
  const addReveal = useScrollReveal();

  return (
    <section id="about">
      <h2 className="section-title">Who I Am</h2>
      <div className="about-grid">
        <div className="about-text reveal" ref={addReveal}>
          <p>
            Hey! I'm <strong>Sajid Ullah</strong>, a dedicated <strong>Software Engineering student</strong> with a deep passion for building meaningful technology. I love everything from low-level systems thinking to crafting beautiful user interfaces.
          </p>
          <p>
            I'm constantly learning — diving into new frameworks, working on side projects, and sharpening my problem-solving skills through real-world challenges. My goal is to become a full-stack engineer who bridges design and functionality.
          </p>
          <p>
            Outside of code, I enjoy exploring tech communities, contributing to open-source, and staying up to date with the latest in software development.
          </p>
        </div>
        <div>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div
                className={`stat-card reveal reveal-delay-${i + 1}`}
                ref={addReveal}
                key={stat.label}
              >
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}