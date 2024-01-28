import Head from "next/head";
import { Main } from "../components/ Main";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="index" />

      <Footer />
    </div>
  );
}
