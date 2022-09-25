import { motion, AnimatePresence } from 'framer-motion';
import styles from './SortCanvas.module.css';

interface SortCanvasProps {
  // original array
  arr: number[];
  // obj pos array
  pos: number[];
  // number display size
  size?: number;
  // outter index
  outter?: number;
  // inner index
  inner?: number;
  // marker index
  marker?: number;
}

const SortCanvas = ({
  arr,
  pos,
  size = 48,
  outter = -1,
  inner = -1,
  marker = -1,
}: SortCanvasProps) => {
  const sorted = (v: number) => v < outter;
  const sorting = (v: number) => v === outter;
  const processing = (v: number) => v === inner;
  const marked = (v: number) => v === marker;

  const elevated = (v: number) =>
    sorted(v) || sorting(v) || marked(v);
  const highlighted = (v: number) =>
    sorted(v) || marked(v) || processing(v);

  const showProgress = false;

  return (
    <AnimatePresence>
      <div className={styles.canvas}>
        {pos.map((v, i) => (
          <motion.div
            key={`object-${i}`}
            className={styles.object}
            initial={{ opacity: 0 }}
            animate={{
              opacity: highlighted(v) ? 1 : 0.25,
              top: size * 0.5 + (elevated(v) ? 8 : 0),
              left: v * (size + 5),
              width: size,
              height: size,
              fontWeight: processing(v) ? '700' : '400',
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring' }}
            whileHover={{ scale: 1.4, zIndex: 1 }}
            whileTap={{ scale: 1.2 }}
            style={{
              fontSize: size / 3,
              borderRadius: size / 8,
            }}
          >
            {arr[i]}
          </motion.div>
        ))}
        {showProgress && (
          <motion.div
            key={`outter`}
            className={styles.progress}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              width: (outter + 1.1) * (size + 5),
            }}
            style={{
              height: size * 1.25 + 4,
              top: size * 0.5 + 4,
              left: -size * 0.1,
            }}
          />
        )}
      </div>
    </AnimatePresence>
  );
};

export default SortCanvas;
