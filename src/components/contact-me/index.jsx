import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";
import "./contact-me.scss";

const ContactMe = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("event", e);
  };
  return (
    <>
      <section className="section contact" id="contact_me">
        <h2 className="title">Contact Me</h2>
        <span className="subtitle">Get in touch</span>
        <div className="contactContainer container grid">
          <div>
            <div className="contactInfo">
              <UilPhone className="icon" size="2rem" />
              <div>
                <h3 className="title">Call me</h3>
                <span className="subtitle">+91-9966229322</span>
              </div>
            </div>
            <div className="contactInfo">
              <UilEnvelope className="icon" size="2rem" />
              <div>
                <h3 className="title">Email</h3>
                <span className="subtitle">pranayboreddy@gmail.com</span>
              </div>
            </div>
            <div className="contactInfo">
              <UilMapMarker className="icon" size="2rem" />
              <div>
                <h3 className="title">Location</h3>
                <span className="subtitle">
                  Nandyal,Andhra Pradesh,India - 518502
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={sendMessage} className="contactForm grid">
            <div className="fields grid">
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input id="name" type="text" className="input" />
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input type="text" id="email" className="input" />
              </div>
              <div className="field">
                <label htmlFor="project" className="label">
                  Project
                </label>
                <input type="text" id="project" className="input" />
              </div>
              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea name="message" id="message" className="input" />
              </div>
              <div>
                <button type="submit" className="common-button button-flex">
                  Send Message <UilMessage className="icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="section copyright">
        <div className="copyrightSection container">
          <p className="name">&copy;2022 Pranay</p>
          <span className="keyword">ALL RIGHTS RESERVED</span>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
