import React from "react";
import Facebook from "../Icons/FacebookIcon";
import Instagram from "../Icons/InstagramIcon";
import Linkedin from "../Icons/LinkedinIcon";
import Twitter from "../Icons/TwitterIcon";
import Youtube from "../Icons/YoutubeIcon";
import Email from "../Icons/EmailIcon";
import Phone from "../Icons/PhoneIcon";
import "../../styles/main.scss";
import logo from "../Logo/Logo.png";


const TopMenu = () => {
  return (
   
      <div className="top-menu container-custom">
        <ul className="top-menu__right">
          <li>
            <a href="#">
              <Facebook></Facebook>
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram></Instagram>
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin></Linkedin>
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter></Twitter>
            </a>
          </li>
          <li>
            <a href="#">
              <Youtube></Youtube>
            </a>
          </li>
        </ul>
        <div className="logo top-menu__center">
        <h3>هتل آریا</h3>
        <img src={logo} alt="logo" />
      </div>
        <ul className="top-menu__left">
          <li><a href="mailto:arya@gmail.com">arya@gmail.com</a><Email></Email></li>
          <li><a href="tel:02181686">۰۲۱۸۱۶۸۸</a><Phone></Phone></li>
        </ul>
      </div>

  );
};

export default TopMenu;
