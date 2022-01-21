import { useDebounce } from "./useDebounce";

/**
 * @param array - Массив который нужно отфильтровать.
 * @param value - e.target.value.
 * @param filterProp - Ключь, значения которого нужно фильтровать.
 * @param filterPropExtra - (Необязательно) Дополнительный ключь, значения которого нужно фильтровать.
 */
export const useFilter = (
  array: any,
  value: string,
  filterProp: string,
  filterPropExtra?: string
) => {
  let newFilteredArray = array.filter((item: any) => {
    if (typeof filterPropExtra === "undefined")
      return RegExp(value, "igs").test(item[filterProp]);

    return RegExp(value, "igs").test(
      `${item[filterPropExtra]} ${item[filterProp]}` +
        `${item[filterProp]} ${item[filterPropExtra]}`
    );
  });
  return useDebounce(newFilteredArray, 500);
};
