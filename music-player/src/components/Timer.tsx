import styles from './Timer.module.css';

export function Timer() {
  return (
    <div className={styles.trackTime}>
      <div className={styles.track} />
      <div className={styles.time}>
        <div>3:20</div>
        <div>0:12</div>
      </div>
    </div>
  );
}
