import React, { Component } from "react";
import styled from "styled-components";

import Tabs from "./Tabs";
import Cards from "./Cards";
import Carousel from "../Carousel/Carousel";
import { tabData, cardData } from "../../data";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    });
  };

  filterCards = () => {
    const { cards, selected } = this.state;

    const filteredCards = cards.filter(card => card.tab === selected);

    return selected === "all" ? cards : filteredCards;
  };

  render() {
    const { tabs, selected } = this.state;

    return (
      <StyledContent>
        <Tabs
          tabs={tabs}
          selectedTab={selected}
          selectTabHandler={this.changeSelected}
        />

        <Carousel />

        <Cards cardList={this.filterCards()} />
      </StyledContent>
    );
  }
}
