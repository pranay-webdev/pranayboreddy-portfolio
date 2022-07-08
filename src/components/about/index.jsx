import { UilDownloadAlt } from "@iconscout/react-unicons";
import "./about.scss";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="title">About me</h2>
      <span className="subtitle">My Introduction</span>
      <div className="aboutContainer container grid">
        <img
          className="image"
          src={require("../../assets/images/pranay-about.jpg")}
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
          </div>
          <div className="buttonsContainer">
            <a
              download=""
              href="../../assets/pdfs/pranay-resume.pdf"
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
