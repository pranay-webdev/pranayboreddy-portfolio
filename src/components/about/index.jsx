import { UilDownloadAlt } from "@iconscout/react-unicons";
import resume from "../../assets/pdfs/pranay-resume.pdf";
import "./about.scss";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="title">About me</h2>
      <span className="subtitle">My Introduction</span>
      <div className="aboutContainer container grid">
        <img
          className="image"
          src={require("../../assets/images/pranay-about.webp")}
          alt="about"
        />
        <div className="data">
          <p className="description">
            Web Developer, with extensive knowledge and years of experience,
            working in web technologies, delivering quality work.
          </p>
          <div className="info">
            <div>
              <span className="title">02+</span>
              <span className="name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="title">12+</span>
              <span className="name">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="title">2</span>
              <span className="name">
                Companies <br /> Worked
              </span>
            </div>
          </div>
          <div className="buttonsContainer">
            <a
              download="pranay-frontend-resume"
              href={resume}
              className="common-button button-flex"
            >
              Download Resume <UilDownloadAlt className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
