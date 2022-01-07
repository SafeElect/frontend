import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import * as regular from '@fortawesome/free-regular-svg-icons';
import * as socialIcons from "@fortawesome/free-brands-svg-icons/";
import Link from "next/link";

// const SocialMediaIcon = props => {
//     const {
//         icon,
//         ...others
//     } = props;
//     return <FontAwesomeIcon icon={icon} {...others} />
// };

const SocialMediaIcons = (props) => {
  const { size, ...others } = props;
  return (
    <Fragment>
      <a href="https://www.instagram.com/pointocomtr/" target="_blank">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faInstagram}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://www.facebook.com/pointocomtr" target="_blank">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faFacebook}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://twitter.com/pointocomtr" target="_blank">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faTwitter}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://www.linkedin.com/company/pointo1" target="_blank">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faLinkedin}
          size={size ? size : "lg"}
          {...others}
        />
      </a>
    </Fragment>
  );
};

export default SocialMediaIcons;
