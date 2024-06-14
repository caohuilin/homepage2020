import classnames from "classnames";
import style from "./style.module.scss";
import { Theme } from "../ThemeSwitch";

export default function Footer(props) {
  const { theme } = props;
  return (
    <div
      className={classnames(style.footer, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <div className={style.content}>
        Copyright © 2024 caohuilin Use.
        <a target="_blank" href="https://beian.miit.gov.cn/">
          备案号: 晋ICP备2020011596号-1
        </a>
      </div>
    </div>
  );
}
