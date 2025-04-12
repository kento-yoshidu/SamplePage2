import './App.css'
import styles from './css/style.module.css';
import { Page2 } from './components/page2';
import { Div3 } from './components/div3';

function App() {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.item1}>
          item1
        </div>

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

      <Page2 />

      <Div3 />
    </>
  )
}

export default App
