import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'

export default function CoinItems({coins}) {
  return (
    <View style={styles.container}>
			<Image style={styles.image} source={{uri: coins.image}}/>
      <Text style={styles.titleCoin}>{coins.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	container:{
		paddingTop: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	image:{
    width:50,
    height:50,
	},
	titleCoin: {
		color: "#fff",
		marginLeft: 20,
	}
})