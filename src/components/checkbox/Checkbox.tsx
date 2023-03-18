import { useEffect, useMemo, useState } from "react";

type CheckboxProps = {
  checked: boolean;
  onChange?: (b: boolean) => void;
  label?: string;
  disabled?: boolean;
};

enum CheckboxState {
  CHECKED = "checked",
  UNCHECKED = "unchecked",
  DISABLED = "disabled",
}

const STATE_HASH: Record<CheckboxState, string> = {
  [CheckboxState.UNCHECKED]:
    "bg-transparent border-gray5 hover:border-secondary",
  [CheckboxState.CHECKED]: `checkbox-spin-animation bg-secondary border-secondary after:absolute after:block 
  after:border-0 after:border-primary`,
  [CheckboxState.DISABLED]: "bg-gray2 border-gray5 cursor-not-allowed",
};

const Checkbox: React.FC<CheckboxProps> = ({
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
    if (!disabled) {
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
          className={`w-5 h-5 border rounded-[5px] cursor-pointer transition-all flex ${stateClass}`}
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

export default Checkbox;
