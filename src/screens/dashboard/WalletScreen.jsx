import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { useNavigation } from "@react-navigation/native";
const WalletScreen = ({ user, data }) => {
  const navigation = useNavigation();
  const getDataById = (id, retries = 4) =>
    retries === 0 ? null : data.find((item) => item.id === id);

  const renderItem = ({ item }) => {
    const filmData = getDataById(item.infor.dataFilm);
    console.log(filmData);
    return (
      <TouchableOpacity style={styles.row}>
        {item.typeTransactions === "topUp" ? (
          <Image
            source={require("../../assets/images/top_up_img.png")}
            style={styles.image}
          ></Image>
        ) : (
          <Image source={{ uri: filmData.image }} style={styles.image}></Image>
        )}
        <View>
          {item.typeTransactions === "topUp" ? (
            <Text style={styles.subtitle}>Top Up Transactions</Text>
          ) : (
            <Text style={styles.subtitle}>{filmData.name}</Text>
          )}

          <Text
            style={[
              styles.subtitle,
              {
                marginVertical: 8,
                color: item.typeTransactions === "topUp" ? "green" : "red",
              },
            ]}
          >
            IDR {item.infor.paid}
          </Text>
          <Text style={styles.text}>{item.infor.historyCreateAt}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <ScrollView
      scrollEnabled={true}
      nestedScrollEnabled={true}
      style={styles.background}
    >
      {loading ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={{
            marginTop: 300,
          }}
        />
      ) : (
        <SafeAreaView>
          <Text style={styles.title}>My Wallet</Text>

          <TouchableOpacity
            style={{
              padding: 24,
              backgroundColor: COLORS.main_color,
              borderRadius: 30,
              margin: 30,
            }}
            onPress={() => navigation.push("TopUp")}
          >
            <View style={{ flexDirection: "row", marginBottom: 30 }}>
              <View>
                <Text style={[styles.text, { fontWeight: 200 }]}>
                  Card Name
                </Text>
                <Text style={styles.subtitle}>Minh Tri</Text>
              </View>
              <Image
                source={require("../../assets/images/logo_card.png")}
                style={{ height: 32, width: 56, marginStart: 120 }}
              ></Image>
            </View>
            <Text style={styles.text}>6032 1506 4207 2004</Text>
            <Text style={[styles.subtitle, { fontSize: 26, marginTop: 20 }]}>
              IDR {user.wallet}
            </Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Recent Transactions</Text>
          <FlatList
            data={user.historyTransactions}
            keyExtractor={(item) => item.infor.idTransactions}
            renderItem={renderItem}
          ></FlatList>
        </SafeAreaView>
      )}
    </ScrollView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.dark_bg_1,
  },
  title: {
    alignSelf: "center",
    marginTop: 24,
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
  row: {
    flexDirection: "row",
    marginTop: 13,
    alignItems: "center",
  },
  btnHeader: {
    padding: 12,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  subtitle: {
    marginStart: 24,
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  ticketItem: {
    flexDirection: "row",
    marginHorizontal: 24,
    alignItems: "center",
    marginVertical: 12,
  },
  image: {
    marginStart: 24,
    marginVertical: 4,
    height: 120,
    width: 80,
  },
  text: {
    marginStart: 24,
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
  floatingBtn: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    top: 60,
  },
});
