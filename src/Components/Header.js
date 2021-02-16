import React, { Component } from "react";
import { View, text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Crypto App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marignTop: 55,
    alignItems: "center",
  },
  header:{
      fontWeight: 'bold',
      fontSize: 20,
  }
});

const {headerContainer, header}= styles;
export default Header;
