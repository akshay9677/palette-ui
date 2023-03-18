import { useEffect, useMemo, useState } from "react";

type RadioProps = {
  checked: boolean;
  onChange?: (b: boolean) => void;
  label?: string;
  disabled?: boolean;
};

enum RadioState {
  CHECKED = "checked",
  UNCHECKED = "unchecked",
  DISABLED = "disabled",
}

const STATE_HASH: Record<RadioState, string> = {
  [RadioState.UNCHECKED]: "bg-transparent border-gray5 hover:border-secondary",
  [RadioState.CHECKED]: `radio-drop-animation bg-secondary border-secondary after:absolute after:block 
  after:bg-primary after:rounded-2xl after:w-2 after:h-2`,
  [RadioState.DISABLED]: "bg-gray2 border-gray5 cursor-not-allowed",
};

const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  label,
  disabled,
}) => {
  const [_checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (!disabled && !_checked) {
      if (onChange) onChange(!_checked);
      setChecked(!_checked);
    }
  };

  const stateClass = useMemo(() => {
    if (disabled) return STATE_HASH["disabled"];
    else if (_checked) return STATE_HASH["checked"];
    else return STATE_HASH["unchecked"];
  }, [_checked]);

  return (
    <div className="relative flex items-center">
      <input
        checked={_checked}
        type="checkbox"
        onChange={handleChange}
        className="opacity-0 absolute h-0 w-0"
      />
      <div className="relative flex items-center">
        <div
          className={`w-5 h-5 border rounded-2xl cursor-pointer flex ${stateClass}`}
          onClick={handleChange}
        ></div>
      </div>
      {label && (
        <span
          className={`ml-2 cursor-pointer text-md ${
            disabled ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleChange}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Radio;
