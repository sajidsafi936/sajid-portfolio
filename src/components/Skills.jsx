import useScrollReveal from '../hooks/useScrollReveal.js';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript / TypeScript', 'Python', 'C / C++', 'Java', 'HTML & CSS'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['React.js', 'Node.js / Express', 'MongoDB', 'REST APIs', 'Git & GitHub'],
  },
  {
    title: 'Concepts',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Software Development Lifecycle',
      'UI/UX Principles',
      'Problem Solving',
    ],
  },
];

export default function Skills() {
  const addReveal = useScrollReveal();

  return (
    <section id="skills">
      <h2 className="section-title">What I Know</h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div
            className={`skill-category reveal reveal-delay-${i + 1}`}
            ref={addReveal}
            key={group.title}
          >
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}