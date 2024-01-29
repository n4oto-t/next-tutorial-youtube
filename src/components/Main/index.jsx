import { Headline } from "../Headline";
import { Links } from "../Links";
import classes from "./Main.module.css";

export function Main(props) {
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
