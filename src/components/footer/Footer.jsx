import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="footerTitle">
        Copyright © 2023 PANCHAVATI MOTELS. All rights reserved. | Terms &
        Conditions | Privacy Policy | Contact Us
      </h4>
      <span>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon className="ig" icon={faInstagram} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
