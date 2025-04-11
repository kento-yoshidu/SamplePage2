import './App.css'
import styles from './css/style.module.css';

function App() {
  return (
    <>
      <div className={styles.grid}>
        <h2 className={styles.item1}>
          item1
        </h2>

        <div className={styles.item2}>
          item2
        </div>

        <div className={styles.item3}>
          item3
        </div>

        <div className={styles.item4}>
          item4
        </div>

        <div className={styles.item5}>
          item5
        </div>
      </div>
    </>
  )
}

export default App
