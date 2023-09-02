import alubumImage from '../assets/albumImage.png';
import { Timer } from './Timer';
import { Tracker } from './Tracker';
import styles from './LargePlayer.module.css';

export function LargePlayer() {
  return (
    <div className={styles.largePlayer}>
      <img src={alubumImage} alt='' />
      <div className={styles.albumInfo}>
        <h1 className={styles.musicName}>Acorda Devinho</h1>
        <p className={styles.albumName}>Banda Rocketseat</p>
      </div>

      <Tracker />

      <Timer />
    </div>
  );
}
