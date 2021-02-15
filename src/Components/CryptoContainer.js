import React, { Component } from "react";
import { connect } from "react-redux";
import { View, text, Stylesheet, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../Actions/FetchCoinData";
import CoinCard from "./CoinCard";

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }
  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin) => (
      <CoinCard
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        precent_change_24hr={coin.precent_change_24hr}
        precent_change_7d={coin.precent_change_7d}
      />
    ));
  }
  render() {
    const { crypto } = this.props;
    const { contentConainer } = Stylesheet;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={croyto.isFetching}
            textContent={"Loading..."}
            textStyle={{ color: "2353145" }}
            animation="fade"
          />
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={contentConainer}>
        {this.render.CoinCard()}
      </ScrollView>
    );
  }
}

const styles = {
  contentConainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
};

function mapStateToProp(state) {
  return {
    cryoto: state.crypto,
  };
}

export default connect(mapStateToProp, { FetchCoinData })(CryptoContainer);
