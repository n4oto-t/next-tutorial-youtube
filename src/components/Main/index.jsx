import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";
export function Main(props) {
  // useEffect(() => {
  //   // mountの動作を定義
  //   document.body.style.backgroundColor = "lightblue";
  //   // unmount時の動作を定義
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Headline page={props.page} />
        <code className={classes.code}>pages/{props.page}.js</code>
        <Links />
      </main>
    </div>
  );
}
