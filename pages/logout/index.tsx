import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";

const Private = () => {
  let tempData;

  const router = useRouter();

  const handleSubmit = (e) => {
    router.push("/login");
  };
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
      {/* <Layout> */}
      {/* <DetailPage breadCrumbClass={"h-25"} pageTitle={"Thank you!"}> */}
      {/* <h1>{tempData.first + " " + tempData.last}</h1> */}
      <div
        style={{
          background: "linear-gradient(to top, #ffc371,#ff5f6d)",
          height: "100vh",
          // display: "flex",
          justifyContent: "center",
          paddingTop: "300px",
          textAlign:"center"
        }}
      >
        <h1 style={{ color: "white", textAlign:"center" }}>
          Your Vote Has Been Registered, Thank you!
        </h1>
        <Button onClick={handleSubmit} variant="primary">Next Voter</Button>

      </div>
      
      {/* </DetailPage> */}
      {/* </Layout> */}
      <div></div>
    </div>
  );
};

export default Private;
