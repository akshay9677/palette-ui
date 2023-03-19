import { useMemo } from "react";
import { isEmpty } from "../../lib/validation";

type TextType = {
  children: React.ReactNode;
  size?:
    | "xs"
    | "sm"
    | "lg"
    | "base"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "medium" | "bold" | "bolder";
  className?: string;
};

const SIZE_HASH: Record<string, string> = {
  xs: "text-xs",
  sm: "text-sm",
  lg: "text-lg",
  base: "text-base",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const WEIGHT_HASH: Record<string, string> = {
  light: "font-light",
  medium: "font-medium",
  bold: "font-bold",
  bolder: "font-bolder",
};

const Text: React.FC<TextType & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  size,
  weight,
  className,
}) => {
  const sizeClass = useMemo(() => {
    if (size && !isEmpty(SIZE_HASH[size])) return SIZE_HASH[size];
    else return SIZE_HASH["base"];
  }, [size]);
  const weightClass = useMemo(() => {
    if (weight && !isEmpty(WEIGHT_HASH[weight])) return WEIGHT_HASH[weight];
    else return WEIGHT_HASH["medium"];
  }, [weight]);
  return (
    <div
      className={`text-primary-content ${sizeClass} ${weightClass} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Text;
