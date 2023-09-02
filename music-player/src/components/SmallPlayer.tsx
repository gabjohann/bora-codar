import alubumImage from '../assets/albumImage.png';
import { Tracker } from './Tracker';
import styles from './SmallPlayer.module.css';

export function SmallPlayer() {
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
    </div>
  );
}
