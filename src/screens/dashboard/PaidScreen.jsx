import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { useNavigation, StackActions } from "@react-navigation/native";

const PaidScreen = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.dispatch(
      StackActions.replace("TabNavigator", { screen: "WalletTab" })
    );
  };
  return (
    <View style={styles.background}>
      <Image
        source={require("../../assets/images/illustration_3.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Yummy!</Text>
      <Text style={styles.text}>You have successfully</Text>
      <Text style={styles.text}>top up the wallet</Text>
      <TouchableOpacity style={styles.btn} onPress={handleNavigate}>
        <Text style={{ fontSize: 24, fontWeight: 500, color: "white" }}>
          My Wallet
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Discover new movie?{" "}
        <Text
          style={[styles.text, { color: COLORS.main_color }]}
          onPress={() => navigation.push("TabNavigator")}
        >
          Back to home
        </Text>
      </Text>
    </View>
  );
};

export default PaidScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.dark_bg_2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
    marginTop: 75,
    marginBottom: 16,
  },
  image: {
    height: 130,
    width: 170,
  },
  text: {
    color: "gray",
    fontSize: 20,
    fontWeight: 400,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 20,
    backgroundColor: COLORS.main_color,
    marginBottom: 12,
    marginTop: 32,
  },
});
