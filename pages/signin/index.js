import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import initFirebase from "../../config";
import { setUserCookie } from "../../auth/userCookie";
import { mapUserData } from "../../auth/useUser";
import { Container } from "react-bootstrap";
import styles from "./signin.module.scss";
import Layout from "../../src/components/Layout/Layout";
import DetailPage from "../../src/components/DetailPage/DetailPage";

initFirebase();
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user } , {redirectUrl})  => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    },
  },
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/vote";
  return (
    <Layout>
      <DetailPage pageTitle="Sign Up/Log In">
        <div className={styles.signIndiv}>
          <h5>Please Login<span><br></br>to continue!</span></h5>

          <div className={styles.componentWrapper}>
            <StyledFirebaseAuth
              uiConfig={firebaseAuthConfig({ signInSuccessUrl }) }
              firebaseAuth={firebase.auth()}
              signInSuccessUrl={signInSuccessUrl}
            />
          </div>
        </div>
      </DetailPage>
    </Layout>
  );
};

export default FirebaseAuth;
