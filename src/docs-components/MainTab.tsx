import dlv from "dlv";
import { createRef, useEffect, useMemo, useState } from "react";
import Text from "src/components/text/Text";
import LeftArrowIcon from "src/icons/left-arrow.svg";
import RightArrowIcon from "src/icons/right-arrow.svg";

const tabsList = [
  { label: "Get Started", value: "getstarted" },
  { label: "Foundation", value: "foundation" },
  { label: "Components", value: "components" },
];
const MainTabs = ({ onTabChange }: { onTabChange?: (e: string) => void }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [tabRefs, setTabRefs] = useState([]);

  useEffect(() => {
    if (onTabChange) onTabChange(selectedTab);
  }, [onTabChange, selectedTab]);

  const selectedDivStyle = useMemo(() => {
    let selectedTabIndex = tabsList.findIndex(
      (tab) => tab.value === selectedTab
    );
    let selectedTabWidth = dlv(
      tabRefs,
      `${selectedTabIndex}.current.clientWidth`
    );
    let width = 0;
    tabsList.forEach((_, index) => {
      if (index < selectedTabIndex) {
        let selectedTabRef = tabRefs[index];
        width += dlv(selectedTabRef, "current.clientWidth", 0);
      }
    });
    return {
      width: selectedTabWidth,
      transform: `translateX(${width}px)`,
      transitionDuration: "150ms",
    };
  }, [selectedTab, tabRefs]);

  useEffect(() => {
    setTabRefs((elRefs) => tabsList.map((_, i) => elRefs[i] || createRef()));
    setTimeout(() => {
      setSelectedTab("getstarted");
    }, 100);
  }, []);

  const moveTab = (increment: boolean) => {
    let currTabIndex = tabsList.findIndex((tab) => tab.value === selectedTab);
    if (increment) {
      if (currTabIndex + 1 < tabsList.length) {
        let modifiedSelectedTab = tabsList[currTabIndex + 1];
        if (modifiedSelectedTab) setSelectedTab(modifiedSelectedTab.value);
      }
    } else {
      if (currTabIndex - 1 >= 0) {
        let modifiedSelectedTab = tabsList[currTabIndex - 1];
        if (modifiedSelectedTab) setSelectedTab(modifiedSelectedTab.value);
      }
    }
  };

  return (
    <div className="flex mt-8 items-center justify-between lg:w-9/12 xl:w-9/12">
      <RightArrowIcon
        className="w-3 h-3 cursor-pointer invisible lg:visible xl:visible"
        onClick={() => moveTab(false)}
      />
      <div className="flex relative items-center">
        <div
          className="absolute h-full bg-gray1 z-10 rounded-3xl"
          style={selectedDivStyle}
        ></div>
        {tabsList.map((tab, index) => {
          return (
            <div
              ref={tabRefs[index]}
              className="px-6 py-2 cursor-pointer z-20"
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
            >
              <Text size="base">{tab.label}</Text>
            </div>
          );
        })}
      </div>
      <LeftArrowIcon
        className="w-3 h-3 cursor-pointer invisible lg:visible xl:visible"
        onClick={() => moveTab(true)}
      />
    </div>
  );
};

export default MainTabs;
