import classnames from "classnames";
import { useEffect, useState } from "react";
import { Theme } from "../ThemeSwitch";

import style from "./style.module.scss";

export enum ENavigation {
  Home = "home",
  Skill = "skill",
  Experience = "experience",
  Education = "education",
}

interface INavigationProps {
  theme: Theme;
}
export default function Navigation(props: INavigationProps) {
  const { theme } = props;
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.slice(1));
  }, []);

  return (
    <aside
      className={classnames(style.dotsNavigation, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <a
        href={`#${ENavigation.Home}`}
        className={classnames(style.dot, {
          [style.active]: !hash || hash === ENavigation.Home,
        })}
      ></a>
      <a
        href={`#${ENavigation.Skill}`}
        className={classnames(style.dot, {
          [style.active]: hash === ENavigation.Skill,
        })}
      ></a>
      <a
        href={`#${ENavigation.Experience}`}
        className={classnames(style.dot, {
          [style.active]: hash === ENavigation.Experience,
        })}
      ></a>
      <a
        href={`#${ENavigation.Education}`}
        className={classnames(style.dot, {
          [style.active]: hash === ENavigation.Education,
        })}
      ></a>
    </aside>
  );
}
