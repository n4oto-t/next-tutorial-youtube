import { useCallback, useState } from "react";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];
export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <Headline page={props.page} handleReduce={handleReduce} />
        <code className={classes.code}>
          {items.length}/{props.page}.js
        </code>
        <Links items={items} />
      </main>
    </div>
  );
};
