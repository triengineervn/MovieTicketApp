import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { UriUrl } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(UriUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          const user = JSON.parse(userData);
          navigation.push("AppStack", { user: user });
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const checkLogin = async (email, password) => {
    const user = data.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        console.log("Login successful!");
      } catch (error) {
        console.error("Error saving login data:", error);
      }
      navigation.push("AppStack", { user: user });
    } else {
      alert("Wrong Email Address or Password");
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={[styles.logo, { marginTop: 72 }]}
      ></Image>
      <Text style={styles.title}>Welcome Back,</Text>
      <Text style={styles.title}>Movie Lover!</Text>
      <TextInput
        style={styles.textInput}
        label="Email Address"
        mode="outlined"
        secureTextEntry={false}
        textColor="white"
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
        theme={styles.textInputOutlineStyle}
      />
      <TextInput
        style={styles.textInput}
        label="Password"
        mode="outlined"
        secureTextEntry={false}
        underlineColor={"rgba(0,0,0,0)"}
        textColor="white"
        onChangeText={(text) => {
          setPasword(text);
        }}
        value={password}
        theme={styles.textInputOutlineStyle}
      />

      <Text style={styles.text}>Forgot Password?</Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => checkLogin(email, password)}
      >
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.text, { alignSelf: "center", marginTop: 20 }]}>
        Create new account?{" "}
        <Text
          style={{ color: "#1DC7F7" }}
          onPress={() => navigation.push("SignUp")}
        >
          Sign Up
        </Text>
      </Text>

      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/ui_1.png")}
            style={{ height: 32, width: 32 }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 32 }}>
          <Image
            source={require("../../assets/icons/facebook_1.png")}
            style={{ height: 32, width: 32 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#0B0F2F",
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    marginStart: 35,
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  textInputOutlineStyle: {
    colors: {
      placeholder: "white",
      text: "white",
      primary: "#3D58F8",
      underlineColor: "transparent",
      background: "#0B0F2F",
    },
  },
  textInput: {
    width: 360,
    marginHorizontal: 20,
    marginTop: 30,
    marginHorizontal: 24,
  },
  text: {
    marginTop: 12,
    marginRight: 24,
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: 400,
    color: "#FFF",
  },
  btnLogin: {
    marginTop: 28,
    paddingHorizontal: 100,
    borderRadius: 20,
    backgroundColor: "#3D58F8",
    alignSelf: "center",
  },
  textBtn: {
    padding: 20,
    color: "#FFF",
    fontSize: 24,
    fontWeight: 500,
  },
});
