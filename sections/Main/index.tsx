import { useCallback } from "react";
import classnames from "classnames";
import { Theme } from "../../components/ThemeSwitch";
import { ENavigation } from "../../components/Navigation";
import Shape from "./Shape";
import Text from "./Text";

import style from "./style.module.scss";

interface IMainSectionsProps {
  theme: Theme;
  setMouseActive: (active: boolean) => void;
}
export default function MainSections(props: IMainSectionsProps) {
  const { theme, setMouseActive } = props;
  const handleMouseOver = useCallback(() => {
    setMouseActive(true);
  }, [setMouseActive]);
  const handleMouseOut = useCallback(() => {
    setMouseActive(false);
  }, [setMouseActive]);
  return (
    <section id="home" className={style.home} data-section-name="home">
      <main>
        <div
          className={style.content}
          data-sr-id="1"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <a href="#" className={style.tilter}>
            <figure className={style.tilterFigure}>
              <Shape />
              <figcaption className={style.tilterCaption}>
                <Text theme={theme} />
              </figcaption>
            </figure>
          </a>
        </div>
      </main>
      <div
        className={classnames(style.anchor, {
          [style.dark]: theme === Theme.Dark,
          [style.light]: theme === Theme.Light,
        })}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a href={`#${ENavigation.Skill}`} data-sr-id="2">
          技能清单
        </a>
        <a href={`#${ENavigation.Experience}`} data-sr-id="3">
          个人经历
        </a>
        <a href={`#${ENavigation.Education}`} data-sr-id="4">
          教育经历
        </a>
      </div>
    </section>
  );
}
