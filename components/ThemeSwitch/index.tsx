import classnames from "classnames";
import { useCallback } from "react";

import style from "./style.module.scss";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

interface IThemeSwitchProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function ThemeSwitch(props: IThemeSwitchProps) {
  const { theme, setTheme } = props;
  const handleThemeChange = useCallback(
    (e) => {
      setTheme(e.target.checked ? Theme.Dark : Theme.Light);
    },
    [setTheme]
  );
  return (
    <label
      className={classnames(style.switch, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <input
        type="checkbox"
        checked={theme === Theme.Dark}
        onChange={handleThemeChange}
      />
      <span className={style.slider}></span>
    </label>
  );
}
