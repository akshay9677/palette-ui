type TextType = {
  children: React.ReactNode;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
};

const Text: React.FC<TextType> = ({ children, size = "2xl" }) => {
  return <div className={`text-primary-content text-${size}`}>{children}</div>;
};

export default Text;
