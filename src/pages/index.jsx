import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";
export default function Home() {
  // const foo = 1;
  useEffect(() => {
    // マウント時の動作を定義
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の動作を定義
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {/* <a href="/about" onClick={handleClick}>
        a tag
      </a> */}
      <Main page="index" />

      <Footer />
    </div>
  );
}
