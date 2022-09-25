import styles from './SliderControl.module.css';

interface SliderControlProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export default function SliderControl({
  value,
  children,
  set,
  min = -200,
  max = 200,
}: SliderControlProps) {
  return (
    <label className={styles.slider}>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) =>
          set(parseFloat(e.target.value) || 0)
        }
      />
    </label>
  );
}
