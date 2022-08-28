import './style.scss';
import contacts from "./data/contacts.json";
import relevant_jobs from "./data/relevant_jobs.json";
import skills from "./data/skills.json";
import projects from "./data/projects.json";
import { useEffect } from "react";

function calcBirthDate() {
  const myDate = new Date('1992-09-05');
  const today = new Date();

  return parseInt(new Date(today - myDate).getFullYear() - 1970)
}

function App() {
  useEffect(() => {
    const Animation = { tags: Array.from(document.querySelectorAll("[class*='animate-']")) };

    const checkScreen = () => {
      Animation.tags.forEach((item) => item.getBoundingClientRect().y - window.innerHeight <= 0 ? item.classList.add("animated") : false);
    };

    checkScreen();

    window.addEventListener("load", checkScreen);
    window.addEventListener("scroll", checkScreen);

    return () => {
      window.removeEventListener("load", checkScreen);
      window.removeEventListener("scroll", checkScreen);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="super">
        Gábor Jez <br />
        <span className="typewriter">web developer</span>
      </h1>
      <div className="d-flex direction-row--desktop">
        <article>
          <section className="animate-appear">
            <h2 className="animate-appear">Contacts</h2>
            <ul className="animate-appear">
              { contacts.map(contact => (
                <li className="animate-appear">{`${contact.name}: `}
                  <a className="break--mobile" href={contact.link} target="_blank" rel="noreferrer" data-print={contact.text}>{ contact.text }</a>
                </li>
              )) }
            </ul>
          </section>
          <AsideIntroduction />
          <section className="animate-appear">
            <h2 className="animate-appear">Previous Jobs</h2>
            <dl className="animate-appear">
              { relevant_jobs.map(job => (
                <div className="animate-appear">
                  <dt>
                    /* {job.time} <a href={job.link} target="_blank" rel="noreferrer">{` ${job.name}`}</a> */
                  </dt>
                  <dd>{job.description}</dd>
                </div>
              )) }
            </dl>
          </section>
          <section className="animate-appear">
            <h2 className="animate-appear">Softwares / Workflow</h2>
            <dl className="animate-appear">
              { skills.map(skill => (
                <div className="animate-appear">
                  <dt>/* {skill.title} */</dt>
                  <dd>{skill.list}</dd>
                </div>
              )) }
            </dl>
          </section>
          <div clasName="hidden--desktop"><AsideProjects /></div>
          <section className="animate-appear complex-link">
            <h2 className="animate-appear">Learned from</h2>
            <ul className="animate-appear">
              <li>
                <a href="https://www.codecademy.com" data-print="(https://www.codecademy.com)">Codecademy</a>
              </li>
              <li>
                <a href="https://teamtreehouse.com" data-print="(https://teamtreehouse.com)">Treehouse</a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org" data-print="(https://www.freecodecamp.org)">Free Code Camp</a>
              </li>
              <li>
                <a href="https://www.w3schools.com" data-print="(https://www.w3schools.com)">W3Schools</a>
              </li>
              <li>
                <a href="https://www.frontendmentor.io" data-print="(https://www.frontendmentor.io)">Frontend Mentor</a>
              </li>
            </ul>
          </section>
          { /* <a className="button blue animate-appear" href="gabor_jez-cv.pdf">Download CV</a> */ }
        </article>
        <div className="hidden--mobile animate-appear width-100">
          <AsideIntroduction />
          <AsideProjects />
        </div>
      </div>
    </div>
  );
}

function AsideIntroduction() {
  return (
    <aside className="animate-appear">
      <p className='animate-appear'>&lt;!--Hi! I’m Jez. {calcBirthDate()} old. Web developer.</p>
      <p className='animate-appear'>From a very early age I liked tinkering with computers around me. Later I found many interesting ways to put ideas into reality.</p>
      <p className='animate-appear'>Today, I'm providing gap filling solutions for existing problems considering the needs of the people around me</p>
      <p className='animate-appear'>I would love to work on larger, more meaningful projects to give me more opportunities to use my talents and skills.--&gt;</p>
    </aside>
  )
}

function AsideProjects() {
  return (
    <aside id="collect-projects-content" className="animate-appear">
      <p className='animate-appear'>&lt;!-- Projects I built</p>
      <ul>
        { projects.map(project => (
          <li className="animate-appear">
            <a href={project.link} target="_blank" rel="noreferrer" data-print={project.link}> {project.name} </a>
            { project.description && <span>{` ${project.description}`}</span> }
          </li>
        )) }
      </ul>
      <p className="animate-appear">--&gt;</p>
    </aside>
  )
}

export default App;
