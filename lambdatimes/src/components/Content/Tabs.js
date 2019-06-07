import React from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import Tab from "./Tab";

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => (
  <div className="tabs">
    <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
      {tabs.map(tab => (
        <Tab
          key={v4()}
          selectTab={tab}
          currentTab={selectedTab}
          changeTabHandler={selectTabHandler}
        />
      ))}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: Props.arrayOf(Props.string).isRequired,
  selectedTab: Props.string.isRequired,
  selectTabHandler: Props.func.isRequired
};

export default Tabs;
