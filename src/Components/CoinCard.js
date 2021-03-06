import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../Utils/CoinIcons";

const styles = StyleSheet.create({
  container: {
    display: "Flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: "Flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  coinSymbol: {
    marignTop: 10,
    marignLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  coinName: {
    marignTop: 10,
    marignLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marignTop: 10,
  },
  coinPrice: {
    marignTop: 10,
    mariginleft: "auto",
    marginRight: 10,
    fontWeight: "blue",
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#fafafa",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "row",
    justifyContent: "spacearound",
  },
  precentageChangePlus: {
    color: "#00bfa5",
    fontWeight: "bold",
    marginLeft: 5,
  },
  precentageChangeMinus: {
    color: "#dd2c00",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

const {
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  precentageChangePlus,
  precentageChangeMinus,
} = styles;

const CoinCard = ({
  symbol,
  coin_name,
  price_usd,
  precent_change_24hr,
  precent_change_7d,
}) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={styles.image} source={{ uri: imges[symbol] }} />
        <Text style={coinSymbol}>{Symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>
          {price_usd}
          <Text style={monySymbol}> $ </Text>
        </Text>
      </View>

      <View style={satatisticsContainer}>
        <Text>
          24Hr:
          <Text
            style={
              precent_change_24hr < 0
                ? precentageChangeMinus
                : precentageChangePlus
            }
          >
            {" "}
            {precent_change_24hr} %
          </Text>
        </Text>

        <Text>
          7D:
          <Text
            style={
              precent_change_7d < 0
                ? precentageChangeMinus
                : precentageChangePlus
            }
          >
            {" "}
            {precent_change_7d} %
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CoinCard;
