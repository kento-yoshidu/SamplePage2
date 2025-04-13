import styles from './css/style.module.css';

function App() {
  return (
    <div className={`${styles.dashboard}`}>
      <header className={`${styles.header} ${styles.backgroundWhite} ${styles.borderBottom}`}>
        header
      </header>
      <main className={`${styles.main} ${styles.backgroundWhitesmoke}`}>
        main
      </main>

      <div className={`${styles.side} ${styles.darkBar}`}>
        side
      </div>
    </div>
  )
}

export default App
