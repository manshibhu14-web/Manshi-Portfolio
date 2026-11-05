import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Github, Linkedin, Mail, Menu, Code2 } from "lucide-react";
import "./styles.css";

const projects = [
  {
    n: "01",
    title: "ShopSphere",
    type: "E-commerce Admin Dashboard",
    desc: "A responsive e-commerce admin dashboard to manage products, orders, and customers. Includes CRUD operations, search, filtering, order tracking, and sales analytics.",
    tags: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Recharts",
      "JSON Server",
    ],
    art: "merch",
    image: "/shopsphere-dashboard.png",
    liveUrl: "https://shopsphere-red-delta.vercel.app/",
    githubUrl: "https://github.com/manshibhu14-web/ShopSphere",
  },
  {
    n: "02",
    title: "EduSphere",
    type: "Online Learning Platform",
    desc: "An online learning platform where students can explore courses, enroll, watch lessons, and track their learning progress.",
    tags: ["React", "JavaScript", "React Router", "Axios", "CSS"],
    art: "edu",
  },
  {
    n: "03",
    title: "TaskFlow",
    type: "Project Management Platform",
    desc: "A project management application to create projects, organize tasks, manage deadlines, and track work progress using a Kanban board.",
    tags: ["React", "JavaScript", "Redux Toolkit", "CSS"],
    art: "task",
  },
];


const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Redux Toolkit",
  "Context API",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "TypeScript",
  "JSON",
  "SQL (Basic)",
  "REST APIs",
  "Axios",
  "Fetch API",
  "Git",
  "GitHub",
  "VS Code",
  "Chrome DevTools",
  "Responsive Design",
  "Reusable Components",
  "Search & Filtering",
  "Sorting",
  "Cart Management",
  "API Integration",
  "Debouncing",
  "Throttling",
  "Data Structures & Algorithms",
  "SPA Development"
];



function ProjectArt({ type }) {
  return (
    <div className={"art-preview " + type}>

      {/* ShopSphere */}
      {type === "merch" && (
        <div className="dashboard">
          <header>
            Sales overview <span>Last 30 days　⌄</span>
          </header>
          <section>
            <i /><i /><i />
          </section>
          <div className="bars">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} style={{ height: (35 + (i * 17) % 60) + "%" }} />
            ))}
          </div>
          <footer><i /><i /><i /></footer>
        </div>
      )}

      {/* EduSphere */}
      {type === "edu" && (
        <div className="learning-board">
          <header>
            My learning <span>View all courses ↗</span>
          </header>
          <h3>Continue learning</h3>
          <div className="course-grid">
            <div className="course-card">
              <div className="course-image">UI</div>
              <b>UI Design</b>
              <small>8 of 12 lessons</small>
              <div className="progress"><i style={{ width: "70%" }} /></div>
            </div>
            <div className="course-card">
              <div className="course-image">JS</div>
              <b>JavaScript</b>
              <small>5 of 10 lessons</small>
              <div className="progress"><i style={{ width: "50%" }} /></div>
            </div>
            <div className="course-card">
              <div className="course-image">RE</div>
              <b>React Basics</b>
              <small>3 of 8 lessons</small>
              <div className="progress"><i style={{ width: "38%" }} /></div>
            </div>
          </div>
        </div>
      )}

      {/* TaskFlow */}
      {type === "task" && (
        <div className="kanban-board">
          <header>
            Project board <span>＋ Add task</span>
          </header>
          <div className="kanban-columns">
            <div className="kanban-column">
              <b>To Do <small>2</small></b>
              <article>Design login page</article>
              <article>Create dashboard UI</article>
            </div>
            <div className="kanban-column">
              <b>In Progress <small>2</small></b>
              <article>API integration</article>
              <article>Task filters</article>
            </div>
            <div className="kanban-column">
              <b>Done <small>1</small></b>
              <article>Project setup</article>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


export default function App() {
  const [open, setOpen] = useState(false);
  return <div className="page">
    <header className="nav wrap"><a className="logo" href="#home"><b>M</b> Manshi Gupta<span>.</span></a><button className="hamb" onClick={() => setOpen(!open)}><Menu /></button><nav className={open ? "show" : ""}><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
      <a
        className="nav-button"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=manshibhu14@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let's talk
      </a>

    </nav></header>
    <main>
      <section className="hero wrap" id="home"><div className="hero-copy"><div className="eyebrow"><i /> OPEN TO FRONTEND OPPORTUNITIES</div><h1>Building thoughtful<br /><em>digital experiences.</em></h1><p>Hi, I’m Manshi — a Frontend Developer with 2.4+ years of experience creating responsive interfaces and useful web experiences with React and JavaScript.</p><div className="actions"><a className="darkbtn" href="#work">Explore my work <ArrowUpRight size={16} /></a><a href="#contact">Get in touch <ArrowDownRight size={16} /></a></div><div className="social"><a href="https://www.linkedin.com/in/manshi-gupta-74bb541ba/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href="https://github.com/manshibhu14-web" target="_blank" rel="noreferrer"><Github /> GitHub</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manshibhu14@gmail.com"
          target="_blank"><Mail /> Email</a></div></div>

        <div className="hero-art">
  <a
    href="/Manshi_Gupta_Frontend_React_Developer_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-card"
  >
    <div className="resume-document">
      <iframe
        src="/Manshi_Resume.png"
        title="Manshi Gupta Resume"
      />
    </div>

    <span>My Resume ↗</span>
  </a>
</div>

        <a className="scroll" href="#work">—　SCROLL TO EXPLORE</a></section>
      <div className="band"><b>GOOD DESIGN SHOULD FEEL SIMPLE.<br /><span>GOOD CODE SHOULD MAKE IT POSSIBLE.</span></b><small>BASED IN INDIA　 ·　 AVAILABLE FOR THE NEXT CHAPTER ↗</small></div>
      <section className="wrap work section" id="work"><div className="heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Things I’ve <em>built.</em></h2></div><p>A selection of frontend projects where I’ve worked on interfaces, interactions, and practical product features.</p></div><div className="projects">{projects.map(p => <article className="project" key={p.n}>
        <div className="project-image">
  {p.image ? (
    <img
      src={p.image}
      alt={`${p.title} dashboard preview`}
      className="project-screenshot"
    />
  ) : (
    <ProjectArt type={p.art} />
  )}
  <span>{p.n}</span>
</div>
        <div className="project-copy"><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t => <i key={t}>{t}</i>)}</div>
        <div className="project-links">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
          )}

          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}

          {!p.liveUrl && !p.githubUrl && (
            <a href="#contact">Discuss this project ↗</a>
          )}
        </div>
      </div></article>)}</div></section>
      <section className="about"><div className="wrap about-grid" id="about"><div><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Curious by nature.<br /><em>Developer by choice.</em></h2></div><div className="about-copy"><p>I'm a Frontend Developer with 2.4+ years of experience building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS.</p><p>I enjoy creating reusable UI components, integrating REST APIs, and managing application state with Redux Toolkit. I'm also expanding my skills in TypeScript and Next.js to improve my frontend development skills.</p><div className="facts"><div><b>2.4+</b><small>YEARS EXPERIENCE</small></div><div><b>MCA</b><small>CURRENTLY PURSUING</small></div><div><b>React</b><small>PRIMARY FOCUS</small></div></div></div></div></section>
      <section className="wrap section skills" id="skills"><div className="heading"><div><div className="eyebrow">03 / TOOLKIT</div><h2>My everyday <em>stack.</em></h2></div><p>Tools and technologies I use at work or am actively developing through hands-on practice.</p></div><div className="skill-grid"><div className="skill-card"><Code2 /><b>Frontend<br />development</b><p>Building responsive, accessible and maintainable interfaces.</p></div><div className="pills">{skills.map(s => <i key={s}>{s}</i>)}</div></div></section>
      <section className="education"><div className="wrap edu-grid"><div><div className="eyebrow">04 / EDUCATION & EXPERIENCE</div><h2>Always in<br /><em>progress.</em></h2></div><div className="timeline"><article><small>2024 — PRESENT</small><div><b>Frontend Developer</b><p>Mitrayu Tech Pvt Ltd</p><label>React · JavaScript · Redux Toolkit · REST APIs</label></div></article><article><small>IN PROGRESS</small><div><b>Master of Computer Applications</b><p>Mangalayatan University</p></div></article></div></div></section>
      <section className="contact" id="contact"><div className="wrap"><div className="eyebrow">05 / HAVE A PROJECT IN MIND?</div><h2>Let’s make something<br /><em>meaningful.</em></h2><p>I’m open to discussing React frontend opportunities and interesting projects.</p>
        <a className="limebtn"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=manshibhu14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello ↗
        </a>
        <div className="contact-foot"><span>MANSHI GUPTA · FRONTEND DEVELOPER</span><span>
          <a href="https://www.linkedin.com/in/manshi-gupta-74bb541ba/" target="_blank" rel="noopener noreferrer">  LINKEDIN ↗</a>
          <a href="https://github.com/manshibhu14-web" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        </span></div></div></section>
    </main><footer className="wrap"><span>© 2026 Manshi Gupta</span><span>DESIGNED WITH CARE · BUILT WITH REACT</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}