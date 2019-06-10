import React from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import styled from "styled-components";
import Tab from "./Tab";

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
  }
`;

const StyledTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const StyledTitle = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => (
  <StyledTabs>
    <StyledTopics>
      <StyledTitle>TRENDING TOPICS:</StyledTitle>
      {tabs.map(tab => (
        <Tab
          key={v4()}
          selectTab={tab}
          currentTab={selectedTab}
          changeTabHandler={selectTabHandler}
        />
      ))}
    </StyledTopics>
  </StyledTabs>
);

Tabs.propTypes = {
  tabs: Props.arrayOf(Props.string).isRequired,
  selectedTab: Props.string.isRequired,
  selectTabHandler: Props.func.isRequired
};

export default Tabs;
