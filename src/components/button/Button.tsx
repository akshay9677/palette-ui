import { useMemo } from "react";
import { isEmpty } from "../../lib/validation";

enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

enum ButtonAppearance {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const SIZE_HASH: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: "px-4 py-1.5 rounded-md text-xs",
  [ButtonSize.MEDIUM]: "px-7 py-2 rounded-lg test-md",
  [ButtonSize.LARGE]: "px-8 py-3.5 rounded-xl text-lg",
};

const APPEARANCE_HASH: Record<ButtonAppearance, string> = {
  [ButtonAppearance.PRIMARY]: "bg-secondary hover:bg-gray9 text-primary",
  [ButtonAppearance.SECONDARY]:
    "bg-transparent hover:bg-gray2 text-secondary border border-secondary",
};

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  appearance?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  appearance,
  onClick,
}) => {
  const sizeClass = useMemo(() => {
    if (size && !isEmpty(SIZE_HASH[size])) return SIZE_HASH[size];
    else return SIZE_HASH[ButtonSize.MEDIUM];
  }, [size]);

  const appearanceClass = useMemo(() => {
    if (appearance && !isEmpty(APPEARANCE_HASH[appearance]))
      return APPEARANCE_HASH[appearance];
    else return APPEARANCE_HASH[ButtonAppearance.PRIMARY];
  }, [appearance]);

  return (
    <button
      className={`cursor-pointer active:scale-95 transition-transform font-display ${sizeClass} ${appearanceClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
