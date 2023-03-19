import CardList from "./CardList";

const Foundation = () => {
  const cardList = [
    { label: "Color Palette", image: "color-palette" },
    { label: "Typography", image: "typography" },
    { label: "Layout Primitives", image: "layout", upcoming: true },
    { label: "Icons", image: "icons", upcoming: true },
  ];
  return <CardList cardList={cardList} />;
};

export default Foundation;
