import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const variants = {
  visible: { scale: 1 },
  hidden: { scale: 0.5 },
};

type CopyToClipboardProps = {
  className?: string;
  onCopyChange?: (val: boolean) => void;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  className,
  onCopyChange,
}) => {
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    if (onCopyChange) onCopyChange(copying);
  }, [copying, onCopyChange]);

  const onCopy = useCallback(() => {
    setCopying(!copying);
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  }, [copying]);
  return (
    <div
      className={`cursor-copy p-2 text-secondary rounded-md bg-primary border border-gray2 ${className}`}
      onClick={onCopy}
    >
      <MotionConfig transition={{ duration: 0.1 }}>
        <AnimatePresence initial={false} mode="wait">
          {copying ? (
            <motion.div
              animate="visible"
              exit="hidden"
              initial="hidden"
              key="check"
              variants={variants}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              animate="visible"
              exit="hidden"
              initial="hidden"
              key="copy"
              variants={variants}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

export default CopyToClipboard;
