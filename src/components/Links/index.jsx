import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.grid}>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
