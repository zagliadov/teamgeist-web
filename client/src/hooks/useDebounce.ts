import { useState, useEffect } from "react";

/**
 * 
 * @param {any} value Значение которое попадет в зависимость useEffect 
 * запишеться в setState и вернется с delay ms
 * @param {number} delay Значение в ms для setTimeout и отложенного возврата значения
 * @returns clearTimeout
 */
export const useDebounce = (value: any, delay: number) => {
  const [debValue, setValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debValue;
};
