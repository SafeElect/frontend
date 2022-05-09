import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Private = () => {
  let tempData;

  useEffect(() => {
    if (
      typeof localStorage.items !== "undefined" &&
      typeof localStorage.getItem("items") !== null
    ) {
      const itemsTemp = JSON.parse(localStorage.getItem("items") + "");
      tempData = itemsTemp;
      console.log(itemsTemp.id);
      localStorage.setItem("items", JSON.stringify(""));
      localStorage.setItem("success", JSON.stringify(false));
    }
  }, []);

  return (
    <div>
      <div></div>
      {/* <h1>{tempData.first + " " + tempData.last}</h1> */}
      <h1>YOU HAVE VOTED</h1>
    </div>
  );
};

export default Private;
