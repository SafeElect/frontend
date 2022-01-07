import React from 'react';
import Image from "react-bootstrap/Image";

const Logo = (props:any) => {
    const {
        isLight = true,
        ...others
    } = props;

    return isLight
        ? <Image src={"/images/logo/vote.png"} {...others} />
        : <Image src={"/images/logo/vote.png"} {...others} />;
};

export default Logo;