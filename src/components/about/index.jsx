import Image from "next/image";
import resume from "../../assets/pdfs/pranay-resume.pdf";
import Icon from "../icon";
import "./about.scss";
import Link from "next/link";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="title">About me</h2>
      <span className="subtitle">My Introduction</span>
      <div className="aboutContainer container grid">
        <Image
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
            <Link
              href={resume}
              target="_blank"
              className="common-button button-flex"
            >
              View Resume
              <Icon size="24px" icon="arrow-up-right" className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
