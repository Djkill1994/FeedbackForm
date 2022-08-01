import { useState } from "react";
import {
  useValidation,
  UseValidationReturn,
  ValidationsMap,
} from "./useValidation";

export interface IUseInputReturn extends UseValidationReturn {
  value: string;
  onChange: (value: string) => void;
  onBlur: VoidFunction;
  isDirty: boolean;
  clearField: VoidFunction;
}

export const useInput = (
  initialValue: string,
  validations: ValidationsMap
): IUseInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (value: string): void => setValue(value);

  const onBlur = (): void => setDirty(true);

  const clearField = (): void => {
    setValue("");
    setDirty(false);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    clearField,
    ...valid,
  };
};
