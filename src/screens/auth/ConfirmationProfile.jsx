import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
const ConfirmationProfile = ({ navigation, route }) => {
  const user = route?.params.user;
  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 12, marginTop: 12, alignSelf: "flex-start" }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <Text style={styles.title}>Confirm New</Text>
      <Text style={styles.title}>Account</Text>
      <Image
        source={require("../../assets/images/photo_profile.png")}
        style={{ marginTop: 90, height: 160, width: 160 }}
      ></Image>
      <Text style={styles.subtitle}>Welcome</Text>
      <Text style={styles.title}>{user.fullname}</Text>
      <TouchableOpacity
        style={styles.btnRegis}
        onPress={() => navigation.push("AppStack", { user: user })}
      >
        <Text style={styles.textBtn}>Create My Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConfirmationProfile;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.dark_bg_2,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  subtitle: {
    marginTop: 32,
    marginBottom: 12,
    color: "white",
    fontSize: 16,
    fontWeight: 300,
  },
  textBtn: {
    padding: 20,
    color: "#FFF",
    fontSize: 18,
    fontWeight: 500,
  },
  btnRegis: {
    marginTop: 100,
    marginVertical: 44,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#3D58F8",
    alignSelf: "center",
  },
});
