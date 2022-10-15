import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function CoinItems({ coins }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Image style={styles.image} source={{ uri: coins.image }} />
        <View stlye={styles.containerName}>
          <Text style={styles.titleCoin}>{coins.name}</Text>
          <Text style={styles.symbol}>{coins.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.priceCoin}>$ {coins.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coins.price_change_percentage_24h < 0 ? styles.priceDown : styles.priceUp,
          ]}
        >
          {coins.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTitle: {
    alignItems: "center",
    flexDirection: "row",
  },
  containerName: {},
  image: {
    width: 40,
    height: 40,
  },
  titleCoin: {
    color: "#fff",
    marginLeft: 20,
  },
  priceCoin: {
    color: "#fff",
		textAlign:"right"
  },
  symbol: {
    color: "orange",
    textTransform: "uppercase",
    marginLeft: 20,
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "green",
  },
	priceDown: {
    color: "red",
  },
});
