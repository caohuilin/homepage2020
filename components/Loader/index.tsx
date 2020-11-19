import style from './style.module.scss'

export default function Loader() {
  return (
    <div className={style.loader}>
      <div className={`${style.circle} ${style.bounce1}`}></div>
      <div className={`${style.circle} ${style.bounce2}`}></div>
      <div className={`${style.circle} ${style.bounce3}`}></div>
    </div>
  );
}
