import alubumImage from '../assets/albumImage.png';
import { Timer } from './Timer';
import { Tracker } from './Tracker';
import styles from './MediumPlayer.module.css';

export function MediumPlayer() {
  return (
    <div className={styles.mediumPlayer}>
      <div className={styles.albumData}>
        <img src={alubumImage} alt='' />
        <div className={styles.albumInfo}>
          <h1 className={styles.musicName}>Acorda Devinho</h1>
          <p className={styles.albumName}>Banda Rocketseat</p>
        </div>
      </div>

      <Tracker />

      <Timer />
    </div>
  );
}
