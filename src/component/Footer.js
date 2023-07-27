import "./footer.css";
import { Link } from "react-router-dom";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaInstagram,
  FaArrowAltCircleUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "black", marginRight: "1.8rem" }}
            />
            <div>
              <p>Athar Hossain</p>
              <p>FrontEnd Developer</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              +91 8240764685
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              ashar7003@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Page</h4>
          <p>
            Hi,This page is made by Athar Hossain using React Js and material Ui
            and the Api used in this is from unsplash.com
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/profile.php?id=100008970912513">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://www.instagram.com/i_am_atharhossain/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
          <FaArrowAltCircleUp
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            size={40}
            style={{
              color: "#fff",
              marginLeft: "420px",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
