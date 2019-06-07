import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";
import { tabData, cardData } from "../../data";

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
      <div className="content-container">
        <Tabs
          tabs={tabs}
          selectedTab={selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cardList={this.filterCards()} />
      </div>
    );
  }
}
