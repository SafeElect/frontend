import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const Sidebar = (props) => {
  return (
    <Menu>
      <Link href="/kurumsal">
        <a className="menu-item" >
          {/* {t.corporate} */}
        </a>
      </Link>
      <Link href="/hizmetlerimiz">
        <a className="menu-item" >
          {/* {t.ourServices} */}
        </a>
      </Link>
      <Link href="/referanslarimiz">
        <a className="menu-item" >
          {/* {t.ourReferences} */}
        </a>
      </Link>
      <Link href="/iletisim">
        <a className="menu-item" >
          {/* {t.contact} */}
        </a>
      </Link>

      <Link href="/insanKaynaklari">
        <a className="menu-item" target="_blank">
          {/* {t.humanResources} */}
        </a>
      </Link>

      <Link href="/">
        <Image src="/images/pointo-small-logo.jpg" />
      </Link>
      <div style={{ marginTop: "40" }} className={"sidebar-social-icons"}>
        <a href="https://www.instagram.com/pointocomtr/" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faInstagram}
            size={"lg"}
          />
        </a>
        <a href="https://www.facebook.com/pointocomtr" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faFacebook}
            size={"lg"}
          />
        </a>
        <a href="https://twitter.com/pointocomtr" target="_blank">
          <FontAwesomeIcon
            // b color="#1DA1F2"
            color="#2f3d5b"
            className="social-icon"
            icon={faTwitter}
            size={"lg"}
          />
        </a>
        <a href="https://www.linkedin.com/company/pointo1" target="_blank">
          <FontAwesomeIcon
            // color="#0072b1"
            color="#2f3d5b"
            className="social-icon"
            icon={faLinkedin} size={"lg"}
          />
        </a>
      </div>
    </Menu>

  );
};

export default Sidebar;
