import alubumImage from '../assets/albumImage.png';
import styles from './MediumPlayer.module.css';
import { Tracker } from './Tracker';

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

      <div className={styles.trackTime}>
        <div className={styles.track} />
        <div className={styles.time}>
          <div>3:20</div>
          <div>0:12</div>
        </div>
      </div>
    </div>
  );
}
