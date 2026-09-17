import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    name: 'Task Manager App',
    desc: 'A full-stack task management application with user authentication, real-time updates, and a clean responsive interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://task-manager-delta-liard-37.vercel.app',
  },
  {
    num: '02',
    name: 'Student Portal',
    desc: 'A web portal for students to track grades, assignments, and schedules. Built with a focus on usability and clean design.',
    tags: ['HTML/CSS', 'JavaScript', 'PHP'],
    link: '#',
  },
  {
    num: '03',
    name: 'Algorithm Visualizer',
    desc: 'An interactive visualization tool for popular sorting and pathfinding algorithms, helping learners understand CS concepts visually.',
    tags: ['JavaScript', 'Canvas API'],
    link: '#',
  },
  {
    num: '04',
    name: 'Weather Dashboard',
    desc: 'A weather app integrating a public API to display real-time forecasts with beautiful data visualization and location detection.',
    tags: ['React', 'REST API', 'CSS'],
    link: '#',
  },
  {
    num: '05',
    name: 'E-Commerce Frontend',
    desc: 'A pixel-perfect e-commerce product page with cart functionality, filters, and a mobile-first design approach.',
    tags: ['React', 'Tailwind', 'Context API'],
    link: '#',
  },
  {
    num: '06',
    name: 'Python Automation Scripts',
    desc: 'A collection of Python scripts for automating repetitive tasks — file organization, web scraping, and data processing.',
    tags: ['Python', 'BeautifulSoup', 'Pandas'],
    link: '#',
  },
];

export default function Projects() {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
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
    cardRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <h2 className="section-title">What I've Built</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" ref={addRef} key={project.num}>
            <div className="project-num">{project.num}</div>
            <div className="project-name">{project.name}</div>
            <div className="project-desc">{project.desc}</div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
