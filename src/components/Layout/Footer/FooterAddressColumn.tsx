import React from "react";
import { Col } from "react-bootstrap";

const FooterAddressColumn = () => {
  return (
    <Col md={3}>
      <h5>Address </h5>
      <p>
        Bilkent University, Üniversiteler Mah. 06800 Çankaya/Ankara
      </p>
      {/* <h5>{t.istanbulOffice}</h5> */}
      {/* <p>
        Nida Kule Göztepe, Merdivenköy Mh., Bora Sokak No:1 Kat:7 34732 Kadıköy/
        İstanbul
      </p> */}
      {/* <h5>{t.usaOffice}</h5> */}
      {/* <p>
      2483 Old Middlefield Way, Suite C, Mountain View, Santa Clara, 94043, California, United States of America
      </p> */}
    </Col>
  );
};

export default FooterAddressColumn;
