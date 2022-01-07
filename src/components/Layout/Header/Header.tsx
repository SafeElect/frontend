import React, { Fragment, useEffect, useState } from "react";
import TopBar from "./TopBarMenu/TopBarMenu";
import TopStickyMenu from "./TopStickyMenu/TopStickyMenu";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  let pageGap: number;

  useEffect(() => {
    const detailPage = Array.from(
      document.getElementsByClassName(
        "breadcrumb-area"
      ) as HTMLCollectionOf<HTMLElement>
    );
    // console.log("breadcrumb"+detailPage[0].style.paddingTop === 55+"");

    pageGap = (window.screen.availHeight / 100) * 30;
    window.addEventListener("scroll", () => {
      // window.pageYOffset > 1 ? setSticky(true) : setSticky(false);
      if (window.pageYOffset > 40) {
        setSticky(true);
        // detailPage[0].style.paddingTop = "0";
      } else {
        setSticky(false);
        // detailPage[0].style.paddingTop = "55";
      }
    });
  });

  return (
    <Fragment>
      <TopBar isSticky={isSticky} />
      <TopStickyMenu isSticky={isSticky} />
    </Fragment>
  );
};

export default Header;
