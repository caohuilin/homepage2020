import { useCallback, useEffect, useRef, useState, MouseEvent } from "react";
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
  const refEl = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState([0, 0, 0]);
  const { theme, setMouseActive } = props;
  const handleMouseOver = useCallback(
    (e) => {
      if (!refEl.current) {
        return;
      }
      const rect = e.target.getBoundingClientRect();
      const height = refEl.current.clientHeight;
      const width = refEl.current.clientWidth;
      const dx = e.clientX - rect.left - width / 2;
      const dy = e.clientY - rect.top - height / 2;
      setMouseActive(true);
      setOffset([dx / 10, dy / 3]);
    },
    [setMouseActive]
  );
  const handleMouseOut = useCallback(() => {
    setMouseActive(false);
    setOffset([0, 0, 0]);
  }, [setMouseActive]);

  const handleMouseTextOver = useCallback(() => {
    setMouseActive(true);
  }, [setMouseActive]);
  const handleMouseTextOut = useCallback(() => {
    setMouseActive(false);
  }, [setMouseActive]);
  return (
    <section id="home" className={style.home} data-section-name="home">
      <main>
        <div className={style.content} data-sr-id="1">
          <a
            className={style.tilter}
            onMouseOver={handleMouseOver}
            onMouseMove={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <figure
              ref={refEl}
              className={style.tilterFigure}
              style={{
                transform: `rotateX(${offset[0] / 10}deg) rotateY(${
                  offset[1] / 10
                }deg)`,
              }}
            >
              <Shape />
              <figcaption
                className={style.tilterCaption}
                style={{
                  transform: `translate(${offset[0]}px, ${offset[1]}px)`,
                }}
              >
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
        onMouseOver={handleMouseTextOver}
        onMouseOut={handleMouseTextOut}
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
