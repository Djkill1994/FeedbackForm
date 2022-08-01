import styles from "./FeedbackForm.module.scss";
import { Button } from "../../common/components/Button";
import { PhoneInput } from "../../common/components/PhoneInput";
import { FormItem } from "./FormItem";
import { useEffect, VFC } from "react";
import { useFormSubmit } from "../../common/hooks/useFormSubmit";
import { useFormValidation } from "./hooks/useFormValidation";
import { Spinner } from "../../common/components/Spinner";
import { NotificationManager } from "react-notifications";

export const FeedbackForm: VFC = () => {
  const [validateForm, resetFields, { name, email, tel, message, date }] =
    useFormValidation();
  const [postFormData, { isLoading, isError, isSuccess }] = useFormSubmit({
    name: name.value,
    email: email.value,
    tel: tel.value,
    message: message.value,
    date: date.value,
  });

  useEffect(() => {
    if (isSuccess) {
      resetFields();
      NotificationManager.success("Ваш отзыв успешно отправлен");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      NotificationManager.error("Что-то пошло не так, попробуйте еще раз");
    }
  }, [isError]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Форма обратной связи</div>
      {isLoading && <Spinner />}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          validateForm(postFormData);
        }}
        className={styles.formWrapper}
        noValidate
      >
        <FormItem
          errorMessage="Неверный формат ввода"
          isError={name.isDirty && !name.inputValid}
        >
          <input
            onChange={({ target: { value } }) =>
              name.onChange(value.toUpperCase())
            }
            onBlur={name.onBlur}
            value={name.value}
            name="name"
            placeholder="Имя Фамилия"
          />
        </FormItem>
        <FormItem
          errorMessage="Некорректный E-Mail"
          isError={email.isDirty && !email.inputValid}
        >
          <input
            onChange={({ target: { value } }) => email.onChange(value)}
            onBlur={email.onBlur}
            value={email.value}
            name="email"
            type="email"
            placeholder="E-Mail"
          />
        </FormItem>
        <FormItem
          errorMessage="Заполните Дату"
          isError={date.isDirty && !date.inputValid}
        >
          <input
            onChange={({ target: { value } }) => date.onChange(value)}
            onBlur={date.onBlur}
            value={date.value}
            name="date"
            type="date"
          />
        </FormItem>
        <FormItem
          errorMessage="Некорректный номер телефона"
          isError={tel.isDirty && !tel.inputValid}
        >
          <PhoneInput
            value={tel.value}
            onBlur={tel.onBlur}
            onChange={tel.onChange}
            placeholder="+7(000) 000-0000"
          />
        </FormItem>
        <FormItem
          errorMessage={
            message.minLengthError
              ? "Минимальное количество символов 10"
              : "Максимальное количество символов 300"
          }
          isError={message.isDirty && !message.inputValid}
        >
          <textarea
            onChange={({ target: { value } }) => message.onChange(value)}
            onBlur={message.onBlur}
            value={message.value}
            className={styles.message}
            placeholder="Сообщение..."
          />
        </FormItem>
        <Button disabled={isLoading}>Отправить</Button>
      </form>
    </div>
  );
};
