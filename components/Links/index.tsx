import classnames from "classnames";
import { Theme } from "../ThemeSwitch";

import style from "./style.module.scss";

interface ILinkProps {
  theme: Theme;
}
export default function Links(props: ILinkProps) {
  const { theme } = props;
  return (
    <div
      className={classnames(style.links, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <a href="https://blog.caohuilin.com/" target="_blank">
        Blog
      </a>
      <a href="https://resume.caohuilin.com/" target="_blank">
        Resume
      </a>
      <a href="https://github.com/caohuilin" target="_blank">
        Github
      </a>
    </div>
  );
}
