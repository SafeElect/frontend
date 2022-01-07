import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoin,
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const Sidebar = (props) => {
  return (
    <Menu>
      <Link href="/kurumsal">
        <a className="menu-item" >
          Home
        </a>
      </Link>
      <Link href="/hizmetlerimiz">
        <a className="menu-item" >
          Candidates
        </a>
      </Link>
      <Link href="/referanslarimiz">
        <a className="menu-item" >
          How To Vote
        </a>
      </Link>
      <Link href="/iletisim">
        <a className="menu-item" >
          SafeElect
        </a>
      </Link>

      <Link href="/insanKaynaklari">
        <a className="menu-item" target="_blank">
          Login
        </a>
      </Link>

      <Link href="/">
        <Image src="/images/logo/vote.png" />
      </Link>
      <div style={{ marginTop: "40" }} className={"sidebar-social-icons"}>
        <a href="https://www.binance.com/" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faGoogle}
            size={"lg"}
          />
        </a>
        <a href="https://github.com/SafeElectr" target="_blank">
          <FontAwesomeIcon
            color="#2f3d5b"
            className="social-icon"
            icon={faGithub}
            size={"lg"}
          />
        </a>
        <a href="https://github.com/SafeElect/smart_contracts/blob/main/SafeElect.sol" target="_blank">
          <FontAwesomeIcon
            // b color="#1DA1F2"
            color="#2f3d5b"
            className="social-icon"
            icon={faBitcoin}
            size={"lg"}
          />
        </a>
        <a href="https://www.linkedin.com/in/syed-muhammad-ali-zaidi-0249b7155/" target="_blank">
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
