import React from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaImage,
  FaJsSquare,
  FaLightbulb,
  FaMicrosoft,
  FaMobileAlt,
  FaPuzzlePiece,
  FaGithub,
  FaReact,
  FaUsers,
  FaComments,
  FaVideo,
  FaServer,
  FaDatabase,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { SiBlender, SiCanva, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

function SkillItem({ label, Icon }) {
  return (
    <li className="skill-item">
      <Icon className="skill-icon" aria-hidden="true" />
      <span>{label}</span>
    </li>
  );
}

function SkillCard({ title, subtitle, items }) {
  return (
    <article className="skill-box">
      <div className="skill-head">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <ul className="skill-list">
        {items.map((item) => (
          <SkillItem key={item.label} label={item.label} Icon={item.Icon} />
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      subtitle: "Modern interfaces with performance and responsiveness.",
      items: [
        { label: "HTML5", Icon: FaHtml5 },
        { label: "CSS3", Icon: FaCss3Alt },
        { label: "JavaScript", Icon: FaJsSquare },
        { label: "React.js", Icon: FaReact },
        { label: "Next.js", Icon: SiNextdotjs },
        { label: "Responsive Design", Icon: FaMobileAlt },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Scalable APIs and real-world server-side architecture.",
      items: [
        { label: "Node.js", Icon: SiNodedotjs },
        { label: "Express.js", Icon: SiExpress },
        { label: "MongoDB", Icon: SiMongodb },
        { label: "REST API", Icon: FaServer },
      ],
    },
    {
      title: "Programming and Fundamentals",
      subtitle: "Strong core CS concepts for clean engineering decisions.",
      items: [
        { label: "C and C++", Icon: FaCode },
        { label: "SQL and DBMS", Icon: FaDatabase },
        { label: "OOP and OS", Icon: FaLaptopCode },
        { label: "Data Structures and Algorithms", Icon: FaPuzzlePiece },
      ],
    },
    {
      title: "UI/UX Design",
      subtitle: "User-centric design process from idea to interaction.",
      items: [
        { label: "Figma", Icon: FaFigma },
        { label: "Photoshop", Icon: FaImage },
        { label: "Canva", Icon: SiCanva },
      ],
    },
    {
      title: "Tools and Software",
      subtitle: "Daily workflow tools used in projects and collaboration.",
      items: [
        { label: "Git and GitHub", Icon: FaGithub },
        { label: "Blender", Icon: SiBlender },
        { label: "Microsoft Office", Icon: FaMicrosoft },
      ],
    },
    {
      title: "Soft Skills",
      subtitle: "Communication, ownership, and collaborative problem solving.",
      items: [
        { label: "Creative Thinking", Icon: FaLightbulb },
        { label: "Problem Solving", Icon: FaPuzzlePiece },
        { label: "Teamwork", Icon: FaUsers },
        { label: "Communication", Icon: FaComments },
      ],
    },
    {
      title: "Video Editing",
      subtitle: "Basic editing support for social and project presentation.",
      items: [{ label: "CapCut", Icon: FaVideo }],
    },
  ];

  return (
    <section id="skills" className="skills reveal-up">
      <div className="skills-container">
        <h2>Skills</h2>
        <p className="skills-tagline">
          A balanced stack across frontend, backend, CS fundamentals, and product design.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              subtitle={group.subtitle}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
