import { useEffect, useRef } from 'react';
import './Experience.css';

const timelineItems = [
  {
    meta: '2024 — Present',
    title: 'BS Software Engineering',
    company: 'Islamia college university peshawar',
    desc: 'Studying core computer science fundamentals including algorithms, data structures, operating systems, databases, and software engineering principles. Maintaining strong academic performance while working on practical projects.',
  },
  {
    meta: '2025',
    title: 'Front-end Developer',
    company: 'Self-Employed',
    desc: 'Developed responsive websites and small web applications for local clients. Gained real-world experience in client communication, project scoping, and delivering polished front-end solutions.',
  },
  {
    meta: '2026',
    title: 'Full Stack Developer',
    company: 'GitHub Community',
    desc: 'Started contributing to open source projects to sharpen programming skills and collaborate with developers worldwide. Focused on documentation improvements and beginner-friendly bug fixes.',
  },
];

export default function Experience() {
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addRef = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <h2 className="section-title">My Journey</h2>
      <div className="timeline">
        {timelineItems.map((item) => (
          <div className="timeline-item" ref={addRef} key={item.title}>
            <div className="timeline-dot"></div>
            <div className="timeline-meta">{item.meta}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
