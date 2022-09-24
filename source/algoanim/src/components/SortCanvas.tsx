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
    elevated(v) || processing(v);

  return (
    <AnimatePresence>
      <div className={styles.canvas}>
        {pos.map((v, i) => (
          <motion.div
            key={`object-${i}`}
            className={styles.object}
            initial={{ opacity: 0 }}
            animate={{
              opacity: highlighted(v) ? 1 : 0.4,
              top: size / 2 + (elevated(v) ? 8 : 0),
              left: v * (size + 5),
              width: size,
              height: size,
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
        <motion.span
          key={`outter`}
          className={styles.letter}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            left: (outter + 0.5) * (size + 5),
            top: size * 1.6,
          }}
        >
          .
        </motion.span>
      </div>
    </AnimatePresence>
  );
};

export default SortCanvas;
