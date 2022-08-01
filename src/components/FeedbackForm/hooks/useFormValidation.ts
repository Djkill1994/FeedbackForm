import { IUseInputReturn, useInput } from "../../../common/hooks/useInput";

interface IUseFormValidationFields {
  name: IUseInputReturn;
  email: IUseInputReturn;
  tel: IUseInputReturn;
  message: IUseInputReturn;
  date: IUseInputReturn;
}

export const useFormValidation = (): [
  validateForm: (afterValidationAction: VoidFunction) => void,
  resetFields: VoidFunction,
  fields: IUseFormValidationFields
] => {
  const name = useInput("", { isEmpty: true, isName: true });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const tel = useInput("", { isEmpty: true, isTelCheck: true, minLength: 3 });
  const message = useInput("", {
    isEmpty: true,
    maxLength: 300,
    minLength: 10,
  });
  const date = useInput("", { isEmpty: true });

  const validateForm = (afterValidationAction: () => void): void => {
    name.onBlur();
    email.onBlur();
    tel.onBlur();
    message.onBlur();
    date.onBlur();

    if (
      name.inputValid &&
      email.inputValid &&
      tel.inputValid &&
      message.inputValid &&
      date.inputValid
    ) {
      afterValidationAction();
    }
  };

  const resetFields = (): void => {
    name.clearField();
    email.clearField();
    tel.clearField();
    message.clearField();
    date.clearField();
  };

  return [validateForm, resetFields, { name, email, tel, message, date }];
};
