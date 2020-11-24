import classnames from "classnames";
import { useCallback, useState } from "react";
import { Theme } from "../ThemeSwitch";

import style from "./style.module.scss";

interface ILinkProps {
  theme: Theme;
}
export default function Links(props: ILinkProps) {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = props;
  const links = (
    <>
      <div className={style.header}></div>
      <a href="https://blog.caohuilin.com/" target="_blank">
        Blog
      </a>
      <a href="https://resume.caohuilin.com/" target="_blank">
        Resume
      </a>
      <a href="https://github.com/caohuilin" target="_blank">
        Github
      </a>
    </>
  );
  const handleSetShowMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu, setShowMenu]);
  return (
    <div
      className={classnames(style.links, {
        [style.dark]: theme === Theme.Dark,
        [style.light]: theme === Theme.Light,
      })}
    >
      <div className={style.hamburger} onClick={handleSetShowMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classnames(style.menu, { [style.show]: showMenu })}>
        {links}
      </div>
    </div>
  );
}
