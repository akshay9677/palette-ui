import { useCallback, useEffect, useMemo, useState } from "react";
import { isEmpty } from "../../lib/validation";

enum InputSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const SIZE_HASH: Record<InputSize, string> = {
  [InputSize.SMALL]: "p-2 rounded-md text-sm",
  [InputSize.MEDIUM]: "p-3 rounded-md text-md",
  [InputSize.LARGE]: "p-4 rounded-lg text-lg",
};

type InputProps = {
  size?: "small" | "medium" | "large";
  placeholder?: string;
  value: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: "number";
};

const Input: React.FC<InputProps> = ({
  size,
  placeholder,
  value,
  onChange,
  disabled,
  type,
}) => {
  const [activePlaceholder, setActivePlaceholder] = useState("");

  useEffect(() => {
    setActivePlaceholder(placeholder || "");
  }, [placeholder]);

  const sizeClass = useMemo(() => {
    if (size && !isEmpty(SIZE_HASH[size])) return SIZE_HASH[size];
    else return SIZE_HASH[InputSize.MEDIUM];
  }, [size]);

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
    },
    []
  );

  const disabledClass = useMemo(() => {
    if (disabled)
      return "bg-gray2 hover:border-gray3 focus-visible:border-gray3 cursor-not-allowed";
  }, [disabled]);

  const onFocusChange = useCallback(() => {
    setActivePlaceholder("");
  }, []);
  const onBlurChange = useCallback(() => {
    setActivePlaceholder(placeholder || "");
  }, []);

  return (
    <input
      placeholder={activePlaceholder || ""}
      value={value}
      onChange={onValueChange}
      disabled={disabled}
      type={type}
      onFocus={onFocusChange}
      onBlur={onBlurChange}
      className={`w-full border-[1.5px] border-gray3 bg-transparent hover:border-secondary focus-visible:outline-none focus-visible:border-secondary 
      focus-visible:-translate-y-1 transition-all transition-transform font-display ${sizeClass} ${disabledClass}`}
    />
  );
};

export default Input;
