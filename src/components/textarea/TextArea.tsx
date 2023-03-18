import { useCallback, useMemo, useState, useEffect } from "react";
import { isEmpty } from "../../lib/validation";

enum TextAreaSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const SIZE_HASH: Record<TextAreaSize, string> = {
  [TextAreaSize.SMALL]: "p-2 rounded-md text-sm",
  [TextAreaSize.MEDIUM]: "p-3 rounded-md text-md",
  [TextAreaSize.LARGE]: "p-4 rounded-lg text-lg",
};

type TextAreaProps = {
  size?: "small" | "medium" | "large";
  placeholder?: string;
  value: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({
  size,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  const [activePlaceholder, setActivePlaceholder] = useState("");

  useEffect(() => {
    setActivePlaceholder(placeholder || "");
  }, [placeholder]);

  const sizeClass = useMemo(() => {
    if (size && !isEmpty(SIZE_HASH[size])) return SIZE_HASH[size];
    else return SIZE_HASH[TextAreaSize.MEDIUM];
  }, [size]);

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <textarea
      placeholder={activePlaceholder || ""}
      value={value}
      onChange={onValueChange}
      disabled={disabled}
      onFocus={onFocusChange}
      onBlur={onBlurChange}
      className={`w-full border-[1.5px] border-gray3 bg-transparent hover:border-secondary focus-visible:outline-none focus-visible:border-secondary 
      focus-visible:-translate-y-1 transition-all transition-transform font-display ${sizeClass} ${disabledClass}`}
    />
  );
};

export default TextArea;
