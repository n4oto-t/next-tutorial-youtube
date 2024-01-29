import Link from "next/link";
import classes from "src/components/Header/Header.module.css";
export function Header() {
  return (
    <header className={classes.header}>
      {/* aタグ使ってリンク作成した場合、ページのリロードが走ってしまい描画が遅くなる */}
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
