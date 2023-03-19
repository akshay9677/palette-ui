import Text from "src/components/text/Text";
import Image from "next/image";
import { useTheme } from "src/hooks/useTheme";

type CardProps = {
  label: string;
  image: string;
  upcoming?: boolean;
};

type CardListProps = {
  cardList: Array<CardProps>;
};

const CardList: React.FC<CardListProps> = ({ cardList }) => {
  const { isDark } = useTheme();
  return (
    <div className="mt-8 lg:mt-14 xl:mt-14 flex justify-center lg:justify-between xl:justify-between flex-wrap">
      {cardList.map((card) => {
        return (
          <div
            key={card.image}
            className={`hover:bg-gray1 p-2.5 overflow-hidden rounded-2xl transition-all my-1 lg:my-3 xl:my-3 relative group ${
              card.upcoming ? "" : "cursor-pointer"
            }`}
          >
            {card.upcoming && (
              <div className="absolute invisible group-hover:visible w-full h-full p-2 left-0 top-0 backdrop-blur-[2px] flex items-center justify-center">
                <Text
                  size="sm"
                  className="bg-primary text-gray1 px-3 py-1 rounded-xl"
                >
                  Coming Soon
                </Text>
              </div>
            )}
            <Image
              src={`/home-cards/${card.image}/${isDark ? "dark" : "light"}.svg`}
              alt={card.image}
              width={200}
              height={140}
            />
            <Text className="mt-3" size="base">
              {card.label}
            </Text>
            <Text className="text-gray8" size="sm">
              {card.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
