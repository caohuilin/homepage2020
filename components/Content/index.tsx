import { Wechat } from "./wechat";
import { Phone } from "./phone";
import { Email } from "./Email";

import style from './style.module.scss'

export function Content() {
    return (
        <div className={style.content}>
            <h1>I'm Huilin Cao</h1>
            <h1>Front-end Engineer</h1>
            <footer className={style.footer}>
                <a><Wechat /></a>
                <a><Phone /></a>
                <a><Email /></a>
            </footer>
        </div>
    )
}