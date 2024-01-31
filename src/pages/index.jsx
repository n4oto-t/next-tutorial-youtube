import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";
export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([1, 2, 3]);

  useEffect(() => {
    // マウント時の動作を定義
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の動作を定義
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  });

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      // alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback((e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>button</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}
