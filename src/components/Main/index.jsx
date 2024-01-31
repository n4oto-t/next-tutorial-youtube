import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";

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
