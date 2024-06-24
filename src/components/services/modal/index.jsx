import Icon from "@/components/icon";
import "./modal.scss";

const ServicesModal = ({ headline, isOpen, handleClose }) => {
  return (
    <div className={`modal ${isOpen ? "activeModal" : ""}`}>
      <div className="modalContent">
        <div className="title">{headline}</div>
        <Icon icon="cross" className="modalClose" onClick={handleClose} />
        <ul className="servicesOffered grid">
          <li className="service">
            <Icon icon="tick" className="modalIcon" />
            <p>I develop User Interfaces with resposiveness</p>
          </li>
          <li className="service">
            <Icon icon="tick" className="modalIcon" />
            <p>Enterprise Level Web Application Development</p>
          </li>
          <li className="service">
            <Icon icon="tick" className="modalIcon" />
            <p>I teach Web Technologies</p>
          </li>
          <li className="service">
            <Icon icon="tick" className="modalIcon" />
            <p>I can help to complete the front end projects</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
