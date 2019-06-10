import React from "react";
import Props from "prop-types";
import styled from "styled-components";

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
  &.active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
`;

const Tab = ({ selectTab, currentTab, changeTabHandler }) => {
  const classTag = selectTab === currentTab ? "tab active-tab" : "tab";
  return (
    <StyledTab
      className={classTag}
      onClick={() => {
        changeTabHandler(selectTab);
      }}
    >
      {selectTab.toUpperCase()}
    </StyledTab>
  );
};

Tab.propTypes = {
  selectTab: Props.string.isRequired,
  currentTab: Props.string.isRequired,
  changeTabHandler: Props.func.isRequired
};

export default Tab;
