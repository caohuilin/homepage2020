import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Loader from "../components/Loader";
import Mouse from "../components/Mouse";
import ThemeSwitch, { Theme } from "../components/ThemeSwitch";
import Navigation from "../components/Navigation";
import Links from "../components/Links";
import MainSection from "../sections/Main";

import style from "./style.module.scss";

export default function Home() {
  const [loading, setIsLoading] = useState(true);
  const [pos, setPos] = useState<[number, number]>([0, 0]);
  const [theme, setTheme] = useState(Theme.Light);
  const [active, setActive] = useState(false);
  const handleMouseOver = useCallback(
    (e) => {
      setPos([e.clientX, e.clientY]);
    },
    [setPos]
  );
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])
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
      {loading && <Loader />}
      {!loading && (
        <>
          <Links theme={theme} />
          <ThemeSwitch theme={theme} setTheme={setTheme} />
          <Navigation theme={theme} />
          <MainSection theme={theme} setMouseActive={setActive} />
          <Mouse theme={theme} pos={pos} active={active} />
        </>
      )}
    </div>
  );
}
