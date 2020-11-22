import Head from "next/head";
import { useCallback, useState } from "react";
import classnames from "classnames";
import Loader from "../components/Loader";
import Mouse from "../components/Mouse";
import ThemeSwitch, { Theme } from "../components/ThemeSwitch";
import Navigation from "../components/Navigation";

import style from "./style.module.scss";

export default function Home() {
  const [pos, setPos] = useState<[number, number]>([0, 0]);
  const [theme, setTheme] = useState(Theme.Dark);
  const handleMouseOver = useCallback(
    (e) => {
      setPos([e.clientX, e.clientY]);
    },
    [setPos]
  );
  return (
    <div
      className={classnames(style.content, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
      onMouseMove={handleMouseOver}
    >
      <Head>
        <title>caohuilin's HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitch theme={theme} setTheme={setTheme}/>
      <Navigation theme={theme} />
      <Loader />
      <Mouse theme={theme} pos={pos} />
    </div>
  );
}
