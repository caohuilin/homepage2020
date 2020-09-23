import styles from './style.module.scss'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <a>Resume</a>
      <a>Blog</a>
      <a>Github</a>
    </div>
  );
}
