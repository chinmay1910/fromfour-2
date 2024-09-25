import { useState, useCallback } from "react";
import React from "react"; // Ensure you import React when using JSX

interface QuantitySelectorProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = React.memo(({ value, min, max, onChange }) => {
  const [disableDec, setDisableDec] = useState(value <= min);
  const [disableInc, setDisableInc] = useState(value >= max);

  const updateButtons = useCallback(
    (newValue: number) => {
      setDisableDec(newValue <= min);
      setDisableInc(newValue >= max);
    },
    [min, max]
  );

  const increment = useCallback(() => {
    if (value < max) {
      const newValue = value + 1;
      onChange(newValue);
      updateButtons(newValue);
    }
  }, [value, max, onChange, updateButtons]);

  const decrement = useCallback(() => {
    if (value > min) {
      const newValue = value - 1;
      onChange(newValue);
      updateButtons(newValue);
    }
  }, [value, min, onChange, updateButtons]);

  return (
    <span className="flex w-min items-center border border-gray-300 rounded-md overflow-hidden dark:border-gray-800">
      <button
        className={` px-2.5 py-2 text-sm font-medium transition-colors duration-150 ${
          disableDec 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-900 dark:text-gray-600" 
            : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900"
        }`}
        onClick={decrement}
        disabled={disableDec}
      >
        &minus;
      </button>
      <input
        className="  px-2.5 py-2 shadow w-10 text-center placeholder-gray-500 border-none hover:border-none active:border-none py-1 text-sm dark:bg-gray-950 dark:text-gray-50"
        type="text"
        value={value}
        readOnly
      />
      <button
        className={` px-2.5 py-2  text-sm font-medium transition-colors duration-150 ${
          disableInc 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600" 
            : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900"
        }`}
        onClick={increment}
        disabled={disableInc}
      >
        +
      </button>
    </span>
  );
});

export default QuantitySelector;
