import Text from "src/components/text/Text";
import CodeBlock from "../CodeBlock";

const introCode = `
import { Button } from "@palette/ui";

const MyComponent = () => {
  return (
    <div>
      <Button onClick={() => alert("Clicked me")}>Click Me</Button>
    </div>
  );
};
`;

const GetStarted = () => {
  return (
    <div className="mt-8 lg:mt-20 xl:mt-20 mx-5 lg:mx-0 xl:mx-0">
      <Text size="2xl" weight="bold">
        Overview
      </Text>
      <Text className="mt-3 leading-loose text-gray9">
        {`Palette is a library of UI Components to build products for the web.
        Palette provides re-usable components to help create an intuitive and
        uniform user interface throughout your web apps. All the components
        follow a particular design system but if it's required to override the
        design it's possible in Palette components.`}
      </Text>
      <Text size="2xl" className="mt-5" weight="bold">
        Usage
      </Text>
      <Text className="mt-3 leading-loose text-gray9">
        {`To use a component import that component from the package, for example to use a button component import it from the package`}
      </Text>
      <CodeBlock code={introCode} language="jsx" className="my-10" />
    </div>
  );
};

export default GetStarted;
