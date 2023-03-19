import Image from "next/image";
import { useTheme } from "src/hooks/useTheme";
import ContrastIcon from "src/icons/contrast.svg";
import GithubIcon from "src/icons/social/github.svg";
import { motion } from "framer-motion";

const Header = () => {
  const { isDark, updateDark } = useTheme();
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between w-full lg:max-w-2xl xl:max-w-2xl mx-5 lg:mx-auto xl:mx-auto py-3 items-center">
        <div>
          <Image
            src={isDark ? "/logo/dark.svg" : "/logo/light.svg"}
            alt="logo"
            width={40}
            height={40}
          />
        </div>
        <div className="flex">
          <motion.div
            whileHover={{
              transform: "translateY(-2px)",
              transition: { duration: 0.1 },
            }}
            onClick={() =>
              window.open("https://github.com/akshay9677/palette-ui")
            }
            className="cursor-pointer cursor-alias"
          >
            <GithubIcon className="w-7 h-7 mr-4" />
          </motion.div>
          <motion.div
            whileHover={{
              transform: "translateY(-2px)",
              transition: { duration: 0.1 },
            }}
            onClick={() => updateDark(!isDark)}
            className="cursor-pointer"
          >
            <ContrastIcon className="w-7 h-7" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
