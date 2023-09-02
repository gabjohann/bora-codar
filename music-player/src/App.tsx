import styles from './App.module.css';
import { LargePlayer } from './components/LargePlayer';
import { MediumPlayer } from './components/MediumPlayer';
import { SmallPlayer } from './components/SmallPlayer';

export function App() {
  return (
    <div className={styles.wrapper}>
      <LargePlayer />
      <MediumPlayer />
      <SmallPlayer />
    </div>
  );
}
