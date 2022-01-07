import type { NextPage } from "next";
import Head from "next/head";
import DetailPage from "../src/components/DetailPage/DetailPage";
import Layout from "../src/components/Layout/Layout";
import Slider from "../src/components/Slider/Slider";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Slider/>
        <div className={styles.container}>
          <Head>
            <title>Safe Elect</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/vote.png" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>Main Page</h1>
          </main>

          <footer className={styles.footer}>
            <h1>Footer</h1>
          </footer>
        </div>
    </Layout>
  );
};

export default Home;
