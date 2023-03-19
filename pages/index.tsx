import { useMemo, useState } from "react";
import Text from "src/components/text/Text";
import CopyToClipboard from "src/docs-components/CopyToClipboard";
import Components from "src/docs-components/home/Components";
import Foundation from "src/docs-components/home/Foundation";
import GetStarted from "src/docs-components/home/GetStarted";
import MainTabs from "src/docs-components/MainTab";
import Layout from "src/layouts/main/Layout";
import copy from "copy-to-clipboard";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("");
  const tabComponents = useMemo(() => {
    return [
      { component: <GetStarted />, value: "getstarted" },
      { component: <Foundation />, value: "foundation" },
      { component: <Components />, value: "components" },
    ];
  }, []);
  const selectedTabComponent = useMemo(() => {
    let selectedTabObj = tabComponents.find((tab) => tab.value === selectedTab);
    return selectedTabObj?.component;
  }, [selectedTab, tabComponents]);
  const copyInstallScript = (val: boolean) => {
    if (val) {
      copy("npm i @palette/ui");
    }
  };
  return (
    <Layout>
      <div className="mt-5 flex justify-center flex-col items-center">
        <Text size="5xl" weight="bold">
          Palette UI
        </Text>
        <Text className="w-2/5 text-center mt-1">
          A minimal component library and design system for react
        </Text>

        <div onClick={() => copyInstallScript(true)}>
          <Text className="mt-8 pl-5 pr-3 py-1 rounded-3xl border-2 border-gray1 flex items-center">
            npm i @palette/ui{" "}
            <CopyToClipboard
              onCopyChange={(val) => copyInstallScript(val)}
              className="ml-1 border-transparent p-0"
            />
          </Text>
        </div>
        <MainTabs onTabChange={(val) => setSelectedTab(val)} />
      </div>
      <div className="h-full overflow-scroll">
        {selectedTabComponent && selectedTabComponent}
      </div>
    </Layout>
  );
}
