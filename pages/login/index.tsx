import React, { useEffect, useRef, useState } from "react";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";
import Styles from "./login.module.scss";
import { useRouter, withRouter } from "next/router";

var bcrypt = require("bcryptjs");

const Login = () => {
  // const [items, setItems] = useState({
  //   temp: "-",
  // });
  let items = "-";
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const pass = e.target.pass.value;
    const response = await fetch("http://localhost:8080/voter/" + id);
    const myJson = await response.json();
    if (myJson.data != undefined) {
      bcrypt.compare(pass, myJson.data.pass, function (err:any, result:any) {
        console.log(result);
        console.log(myJson.data);
        console.log("pass: " + pass);
        console.log("myJson.data.pass: " + myJson.data.pass);
        if (result) {
          //successful login
          //put the myJson.data in a state
          //set login state to true
          // alert("success");
          // setItems({
          //   temp: "WORKING",
          // });
          items = myJson.data;
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("success", JSON.stringify(true));

          router.push({
            pathname: `/vote`,
            // query: { success: true },
          });
        }else{
          localStorage.setItem("success", JSON.stringify(false));
        }
      });
    }
  };
  return (
    <Layout>
      {/* <DetailPage breadCrumbClass={"h-25"} pageTitle={"LOGIN"}> */}
      <div className={Styles.wrapper}>
        <video autoPlay muted loop src="videos/loginParticles.mp4"></video>

        <div className={Styles.loginBox}>
          <img src="./images/logo/vote.png" alt="" />
          <form action="" method="get" onSubmit={submitHandler}>
            <input placeholder="Username" type={"textbox"} name="id"></input>
            <br />
            <input placeholder="Password" type={"password"} name="pass"></input>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      {/* </DetailPage> */}
    </Layout>
  );
};

export default withRouter(Login);
