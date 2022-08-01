import { useState } from "react";

interface IUseFormSubmitProps {
  [key: string]: string;
}

type UseFormSubmit = (
  props: IUseFormSubmitProps
) => [
  VoidFunction,
  { isLoading: boolean; isSuccess: boolean; isError: boolean }
];

export const useFormSubmit: UseFormSubmit = (fields) => {
  const [statuses, setStatuses] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const submit = (): void => {
    setStatuses({ isLoading: true, isSuccess: false, isError: false });
    fetch("http://localhost:3000/feedback", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    })
      .then((data) => {
        setStatuses((prevState) => ({
          ...prevState,
          isSuccess: data.status === 200,
          isError: data.status === 500,
        }));
      })
      .catch(() => {
        setStatuses((prevState) => ({
          ...prevState,
          isSuccess: false,
          isError: true,
        }));
      })
      .finally(() => {
        setStatuses((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      });
  };

  return [submit, statuses];
};
