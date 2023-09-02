import { FastForward, Play, Rewind } from '@phosphor-icons/react';
import styles from './Tracker.module.css';

export function Tracker() {
  return (
    <div className={styles.controlPlayer}>
      <Rewind size={28} weight='fill' />
      <Play size={28} weight='fill' />
      <FastForward size={28} weight='fill' />
    </div>
  );
}
