import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileScreen = ({ navigation, route }) => {
  const user = route?.params.user;

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      Alert.alert("Logout successful");
      navigation.push("SignIn"); // Adjust the screen name as needed
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 12, marginTop: 12 }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <Text style={styles.title}>My Profile</Text>
      <Image source={{ uri: user.avatar }} style={styles.avatar}></Image>
      <Text style={styles.title}>{user.fullname}</Text>
      <Text style={styles.text}>{user.email}</Text>
      <TouchableOpacity
        style={[styles.row, { marginTop: 32 }]}
        onPress={() => navigation.push("EditProfile")}
      >
        <Image
          source={require("../../assets/images/Edit_Profile.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          backgroundColor: "white",
          marginHorizontal: 24,
          marginVertical: 12,
        }}
      ></View>
      <View style={styles.row}>
        <Image
          source={require("../../assets/images/My_Wallet.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>My Wallet</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "white",
          marginHorizontal: 24,
          marginVertical: 12,
        }}
      ></View>
      <View style={styles.row}>
        <Image
          source={require("../../assets/images/Change_Language.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>Change Language</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "white",
          marginHorizontal: 24,
          marginVertical: 12,
        }}
      ></View>
      <View style={styles.row}>
        <Image
          source={require("../../assets/images/Help_Centre.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>Help Centre</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "white",
          marginHorizontal: 24,
          marginVertical: 12,
        }}
      ></View>
      <View style={styles.row}>
        <Image
          source={require("../../assets/images/Rate_App.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.text}>Rate Flutix App</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "white",
          marginHorizontal: 24,
          marginVertical: 12,
        }}
      ></View>
      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.title}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.dark_bg_1,
  },
  avatar: {
    alignSelf: "center",
    width: 100,
    height: 100,
    margin: 24,
    borderRadius: 90,
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: 400,
  },
  btn: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: COLORS.main_color,
    margin: 24,
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    height: 30,
    width: 30,
    marginHorizontal: 24,
  },
  row: {
    flexDirection: "row",
  },
});
