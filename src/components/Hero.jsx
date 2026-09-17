import './Hero.css';
import photo from "../assets/sajid.png";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss,
  SiGit,
  SiMongodb,
} from 'react-icons/si';

const skillIcons = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="first">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <p className="hero-label">Software Engineering Student</p>
        <h1 className="hero-name">
          SAJID<br />
          <span className="outline">ULLAH</span>
        </h1>
        <h1>Full Stack Developer</h1>
        <p className="hero-sub">
          Building <em>clean, scalable</em> websites — passionate about turning complex problems into elegant digital solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="second"></div>
      <div className="photo-wrap">
        <div className="photo-circle"></div>
        <img id="profile-photo" src={photo} alt="sajid ullah photo" />
        <div className="orbit-ring">
          {skillIcons.map((skill, i) => {
            const angle = (360 / skillIcons.length) * i;
            const { Icon } = skill;
            return (
              <div
                className="orbit-item"
                style={{ transform: `rotate(${angle}deg) translate(var(--orbit-radius)) rotate(-${angle}deg)` }}
                key={skill.name}
              >
                <div className="orbit-icon" title={skill.name}>
                  <Icon color={skill.color} size="60%" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}