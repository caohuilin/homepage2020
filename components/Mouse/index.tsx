import classnames from "classnames";
import { Theme } from "../ThemeSwitch";

import style from "./style.module.scss";

interface IMouseProps {
  pos: [number, number];
  theme: Theme;
}
export default function Mouse(props: IMouseProps) {
  const {
    pos: [x, y],
    theme,
  } = props;
  return (
    <div className={style.follower} style={{ left: `${x}px`, top: `${y}px` }}>
      <span
        className={classnames(style.circle, {
          [style.dark]: theme === Theme.Dark,
          [style.light]: theme === Theme.Light,
        })}
      ></span>
    </div>
  );
}
