import { useEffect, useRef } from 'react';
import './Experience.css';

const timelineItems = [
  {
    meta: '2024 — Present',
    title: 'BS Software Engineering',
    company: 'Islamia college university peshawar',
    desc: "Pursuing a Bachelor's degree in Software Engineering, building a strong foundation in programming, data structures, databases, software engineering, and web development. Alongside academics, working on practical projects and continuously developing my skills as a full-stack developer."
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
    desc: "Building practical web applications using MongoDB, Express.js, React, and Node.js. Developed projects including a full-stack Task Manager with authentication, task management, notifications, and a responsive user interface."    
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
