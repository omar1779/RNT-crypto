import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'

const Nav = ({filterCoin}) => {
  const [coins, setCoins] = useState("")
  const handlerInput =(text)=>{
    setCoins(text);
    filterCoin(coins)
  }
  return (
    <View style={styles.containerNav}>
      <StatusBar backgroundColor={'orange'}/>
      <View style={styles.header}>
        <Text style={styles.titleApp}>💰 RNT Crypto</Text>
        <TextInput style={styles.input}
        placeholder="Search a Coin !"
        placeholderTextColor={"#858585"}
        onChangeText={(text)=>{
          handlerInput(text)
        }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerNav: {
    backgroundColor: "#333"
  },
  header: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleApp : {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    color : "#fff",
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center"
  }
})

export default Nav