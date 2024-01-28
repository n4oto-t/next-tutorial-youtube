import Head from "next/head";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

import Links from "../components/Links";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Index page <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Links />
      </main>

      <Footer />
    </div>
  );
}
