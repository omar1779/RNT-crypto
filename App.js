import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CoinItems from "./components/coinItems";
import Nav from "./components/Nav";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const resDataApi = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (error) {
      console.log(error, "error api")
    }
  };
  function filterCoin(search) {
    setSearch(search);
  }
  useEffect(() => {
    resDataApi();
  }, []);
  const apiRefresh = async ()=>{
    setRefresh(true);
    setSearch("")
    await resDataApi();
    setRefresh(false);
  }
  return (
    <View style={styles.container}>
      <Nav filterCoin={filterCoin} />
      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => {
          return <CoinItems coins={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={() => {
          apiRefresh()
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
  },
  title: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});
