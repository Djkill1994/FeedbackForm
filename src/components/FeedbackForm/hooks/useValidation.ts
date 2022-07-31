import { useEffect, useState } from "react";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
} from "../../../common/constants/regex";

export type Validations =
  | "minLength"
  | "maxLength"
  | "isEmpty"
  | "isEmail"
  | "isName"
  | "isTelCheck";

export type ValidationsMap = Partial<Record<Validations, boolean | number>>;

export type UseValidationReturn = {
  isEmpty: boolean;
  minLengthError: boolean;
  maxLengthError: boolean;
  emailError: boolean;
  inputValid: boolean;
  nameError: boolean;
  telError: boolean;
};

export const useValidation = (
  value: string,
  validations: ValidationsMap
): UseValidationReturn => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [telError, setTelError] = useState(false);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    Object.entries(validations).forEach(([key, validationValue]) => {
      switch (key) {
        case "minLength":
          setMinLengthError(value.length < validationValue);
          break;
        case "maxLength":
          setMaxLengthError(value.length > validationValue);
          break;
        case "isEmpty":
          setEmpty(!value);
          break;
        case "isEmail":
          setEmailError(!EMAIL_REGEX.test(String(value).toLowerCase()));
          break;
        case "isName":
          setNameError(!NAME_REGEX.test(String(value).toLowerCase()));
          break;
        case "isTelCheck":
          setTelError(!PHONE_REGEX.test(String(value)));
          break;
      }
    });
  }, [value, validations]);

  useEffect(() => {
    setInputValid(
      !(
        isEmpty ||
        maxLengthError ||
        minLengthError ||
        emailError ||
        telError ||
        nameError
      )
    );
  }, [
    isEmpty,
    maxLengthError,
    minLengthError,
    emailError,
    telError,
    nameError,
  ]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
    telError,
    nameError,
  };
};
