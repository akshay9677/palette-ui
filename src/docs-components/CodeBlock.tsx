import Highlight, { defaultProps, Language } from "prism-react-renderer";
import CopyToClipboard from "./CopyToClipboard";

const theme = {
  plain: {
    color: "var(--gray-12)",
    fontSize: 12,
    fontFamily: "Menlo, monospace",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "var(--gray-04)",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "var(--gray-05)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "var(--gray-05)",
      },
    },
    {
      types: ["class-name", "function", "tag"],
      style: {
        color: "var(--gray-10)",
      },
    },
  ],
};

type CodeBlockProps = {
  code: string;
  language: Language;
  className?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className }) => {
  return (
    <div
      className={`border border-gray2 bg-shadow rounded-lg px-5 relative cursor-text overflow-scroll ${className}`}
    >
      <CopyToClipboard className="absolute right-4 top-3" />
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
