import { useEffect , useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinItems from "./components/coinItems";

export default function App() {
  const [coins, setCoins] = useState([])
    const resDataApi = async () =>{
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    const data = await res.json();
    setCoins(data)
  }
  useEffect(()=>{
    resDataApi();
  },[])
  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({item})=>{
          return <CoinItems coins={item}/>
        }}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
    backgroundColor: "#000",
    justifyContent: "center",
  },
  title: {
    color : "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});
