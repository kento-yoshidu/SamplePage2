import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <ul className={styles.vertical}>
      <li><a href="#">Home</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  )
}