import { useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import AppRoutes from './AppRoutes';

function AppTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AppRoutes
          location={location}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default AppTransition;
