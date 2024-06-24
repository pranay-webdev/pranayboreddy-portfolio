import { scrollToView } from "../../shared/utils";
import "./home.scss";
import profileImg from "../../assets/images/pranay-home.webp";
import Icon from "../icon";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container grid">
        <div className="content grid">
          <div className="social">
            <Link
              aria-label="Navigate to linkedin account"
              href="https://linkedin.com/in/pranay-boreddy/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <Icon icon="linkedin" size="24px" />
            </Link>
            <Link
              aria-label="navigate to Twitter account"
              href="https://twitter.com/pranayboreddy"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <Icon icon="twitter" size="24px" />
            </Link>
            <Link
              aria-label="Navigate to GitHub account"
              href="https://github.com/pranay-webdev"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <Icon icon="github" size="24px" />
            </Link>
          </div>
          <div className="image">
            <Image src={profileImg} alt="Profile" />
          </div>
          <div className="data">
            <h1 className="title">Hi, I am Pranay</h1>
            <h2 className="subtitle">Frontend Developer</h2>
            <p className="description">
              Enterprise application developer focusing on user and developer
              experience delivering quality work.
            </p>
            <button
              onClick={() => scrollToView("contact_me")}
              className="common-button button-flex"
            >
              Contact Me <Icon icon="enter" size="24px" className="icon" />
            </button>
          </div>
        </div>
        <div className="scrollButton">
          <button
            onClick={() => scrollToView("about")}
            className="button button-flex"
          >
            <Icon icon="mouse" size="2rem" />
            <span>Scroll Down</span>
            <Icon icon="arrow-up" size="2.5rem" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
