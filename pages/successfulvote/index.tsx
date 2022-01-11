import React from "react";
import { Toast } from "react-bootstrap";
import DetailPage from "../../src/components/DetailPage/DetailPage";
import Layout from "../../src/components/Layout/Layout";
import styles from "./successfulvote.module.scss";
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie
  } from '../../auth/userCookie';

const SuccessfulVote = () => {
  return (
    <Layout>
      <DetailPage>
        <div className={styles.successfulvoteContainer}>
          <h1>Your vote has been registered!</h1>
          <button></button>
          {removeUserCookie}
        </div>
      </DetailPage>
    </Layout>
  );
};

export default SuccessfulVote;
