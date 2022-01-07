import React from 'react';
import Image from "react-bootstrap/Image";

const Logo = props => {
    const {
        isLight = true,
        ...others
    } = props;

    return isLight
        ? <Image src={"/images/pointo-light.png"} {...others} />
        : <Image src={"/images/pointo-dark.png"} {...others} />;
};

export default Logo;