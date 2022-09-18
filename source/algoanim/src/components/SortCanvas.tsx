import { motion, AnimatePresence } from 'framer-motion';
import styles from './SortCanvas.module.css';

interface SortCanvasProps {
  arr: number[];
  pos: number[];
}

const SortCanvas = ({ arr, pos }: SortCanvasProps) => {
  const size = 48;
  return (
    <AnimatePresence>
      <div className={styles.canvas}>
        {pos.map((v, i) => (
          <motion.div
            key={i}
            className={styles.letter}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: size / 2,
              left: v * (size + 5),
              width: size,
              height: size,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring' }}
            whileHover={{ scale: 1.4, zIndex: 1 }}
            whileTap={{ scale: 1.2 }}
            whileInView={{ opacity: 1 }}
            style={{
              fontSize: size / 3,
              borderRadius: size / 8,
            }}
          >
            {arr[i]}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default SortCanvas;
