import Head from "next/head";
import { useState } from "react";
import classnames from "classnames";
import Loader from "../components/Loader";
import ThemeSwitch, { Theme } from "../components/ThemeSwitch";

import style from "./style.module.scss";

export default function Home() {
  const [theme, setTheme] = useState(Theme.Dark);
  return (
    <div
      className={classnames(style.content, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <Head>
        <title>caohuilin's HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
      <Loader />
    </div>
  );
}
