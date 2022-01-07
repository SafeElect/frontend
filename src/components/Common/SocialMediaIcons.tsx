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

const SocialMediaIcons = (props:any) => {
  const { size, ...others } = props;
  return (
    <Fragment>
      <a href="https://www.binance.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faGoogle}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://github.com/SafeElect" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faGithub}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://github.com/SafeElect/smart_contracts/blob/main/SafeElect.sol" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="social-icon"
          icon={socialIcons.faBitcoin}
          size={size ? size : "lg"}
          {...others}
        />
      </a>

      <a href="https://www.linkedin.com/in/syed-muhammad-ali-zaidi-0249b7155/" target="_blank" rel="noreferrer">
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
