import React from "react";
import { View, Text, Stylesheet, Image } from "react-native";
import { images } from "../Utils/CoinIcons";

const style = Stylesheet.create({
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
  coninSymbol: {
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
  satatisticsContainer: {
      display: 'flex',
      borderTopColor: '#fafafa',
      borderTopWidth: 2,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'row',
      justifyContent: 'spacearound'
  },
  precentageChagePlus:{
    color: '#dd2c00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  precentageChageMinus:{
    color: '#dd2c00',
    fontWeight: 'bold',
    marginLeft: 5,
  }
});

const {
  continer,
  image,
  monySymbolm,
  upperRow,
  coinSymbol,
  CoinName,
  coinPrice,
  satatisticsContainer,
  seperator,
  precentageChagePlus,
  precentageChageMinus
} =styles;

const CoinCard = ({symbol, coin_name, price_usd, precent_change_24hr,precent_change_7d}) =>{
  return (
    <View style={continer}>
      <View style={upperRow}>
        <Image style={StyleSheet.image} source{{ uri: imges[symbol]}}/>
        <Text style={coinSymbol}>{Symbol}</Text>
        <Text style={seperator}>|</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={coinPrice}>{price_usd}<Text style={monySymbol}> $ </Text></Text>
      </View>


    <View style={satatisticsContainer}>
    <Text>24Hr:
          <Text style={precent_change_24hr < 0 ? precentageChageMinus : precentageChagePlus}> {precent_change_24hr} %</Text>
      </Text>

    <Text>7D:
          <Text style={precent_change_7d < 0 ? precentageChageMinus : precentageChagePlus}> {precent_change_7d} %</Text>
        </Text>
    </View>
    </View>
  )};

export default CoinCard;