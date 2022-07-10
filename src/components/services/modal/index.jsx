import { UilTimes, UilCheckCircle } from "@iconscout/react-unicons";
import "./modal.scss";

const ServicesModal = ({ headline, isOpen, handleClose }) => {
  return (
    <div className={`modal ${isOpen ? "activeModal" : ""}`}>
      <div className="modalContent">
        <div className="title">{headline}</div>
        <UilTimes className="modalClose" onClick={handleClose} />
        <ul className="servicesOffered grid">
          <li className="service">
            <UilCheckCircle className="modalIcon" />
            <p>I develop User Interfaces with resposiveness</p>
          </li>
          <li className="service">
            <UilCheckCircle className="modalIcon" />
            <p>Enterprise Level Web Application Development</p>
          </li>
          <li className="service">
            <UilCheckCircle className="modalIcon" />
            <p>I teach Web Technologies</p>
          </li>
          <li className="service">
            <UilCheckCircle className="modalIcon" />
            <p>I can help to complete the front end projects</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
