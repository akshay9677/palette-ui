import CardList from "./CardList";

const Components = () => {
  const cardList = [
    { label: "Button", image: "button" },
    { label: "Input Field", image: "input" },
    { label: "Text Area", image: "textarea" },
    { label: "Checkbox", image: "checkbox" },
    { label: "Radio", image: "radio" },
    { label: "Alert", image: "alert", upcoming: true },
  ];
  return <CardList cardList={cardList} />;
};

export default Components;
