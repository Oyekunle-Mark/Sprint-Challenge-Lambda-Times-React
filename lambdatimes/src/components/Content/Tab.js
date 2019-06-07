import React from "react";
import Props from "prop-types";

const Tab = ({ selectTab, currentTab, changeTabHandler }) => {
  const classTag = selectTab === currentTab ? "tab active-tab" : "tab";
  return (
    <div
      className={classTag}
      onClick={() => {
        changeTabHandler(selectTab);
      }}
    >
      {selectTab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTab: Props.string.isRequired,
  currentTab: Props.string.isRequired,
  changeTabHandler: Props.func.isRequired
};

export default Tab;
