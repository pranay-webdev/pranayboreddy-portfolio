import Icon from "@/components/icon";
import "./modal.scss";
import { use, useEffect } from "react";

const ServicesModal = ({ headline, isOpen, handleClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const preventModalClose = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${isOpen ? "activeModal" : ""}`}
      onClick={handleClose}
    >
      <div className="modalContent" onClick={preventModalClose}>
        <div className="title">{headline}</div>
        <Icon icon="cross" className="modalClose" onClick={handleClose} />
        <ul className="servicesOffered grid">
          <li className="service">
            <Icon icon="circle-tick" className="modalIcon" />
            <p>I develop User Interfaces with resposiveness</p>
          </li>
          <li className="service">
            <Icon icon="circle-tick" className="modalIcon" />
            <p>Enterprise Level Web Application Development</p>
          </li>
          <li className="service">
            <Icon icon="circle-tick" className="modalIcon" />
            <p>I teach Web Technologies</p>
          </li>
          <li className="service">
            <Icon icon="circle-tick" className="modalIcon" />
            <p>I can help to complete the front end projects</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
