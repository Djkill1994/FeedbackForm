import { useEffect, useState, VFC } from "react";
import { PHONE_REGEX } from "../../constants/regex";

interface IPhoneInputProps {
  onChange?: (value: string) => void;
  onBlur?: VoidFunction;
  value: string;
  placeholder?: string;
}

export const PhoneInput: VFC<IPhoneInputProps> = ({
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  const [maskInput, setMaskInput] = useState<string>();

  useEffect(() => {
    const phoneMatch = value.replace(/\D/g, "").match(PHONE_REGEX);

    setMaskInput(
      phoneMatch?.[2]
        ? `(${phoneMatch?.[1]}) ${phoneMatch?.[2]}${
            phoneMatch?.[3] ? "-" + phoneMatch?.[3] : ""
          }`
        : phoneMatch?.[1]
    );
  }, [value]);

  return (
    <input
      value={maskInput || ""}
      onBlur={onBlur}
      onChange={({ target: { value } }) => onChange?.(value)}
      type="text"
      placeholder={placeholder}
    />
  );
};
