import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";
export default function Home() {
  const [foo, setFoo] = useState(1);
  useEffect(() => {
    // マウント時の動作を定義
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の動作を定義
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>button</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
