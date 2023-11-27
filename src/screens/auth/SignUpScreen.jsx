import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { ICONS } from "../../assets/icons/AppIcons";
import { TextInput } from "react-native-paper";
import { UriUrl } from "../../components/index.js";
const SignUpScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [conPassword, setConPasword] = useState("");

  const checkAccountExistence = async (email) => {
    try {
      const response = await fetch(`${UriUrl}?email=${email}`);
      const data = await response.json();
      if (data.length !== 0) {
        return true;
      }
    } catch (error) {
      console.error("Error checking account existence:", error);
      throw error;
    }
  };

  const createNewUser = async (fullname, email, password) => {
    try {
      const isAccountExist = await checkAccountExistence(email);
      if (isAccountExist) {
        alert("Account already exists. Please use a different email.");
        return;
      }
      const response = await fetch(UriUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });
      const data = await response.json();
      alert("Sign Up Success");
      navigation.push("UserProfiling", { data: data });
    } catch (error) {
      console.error("Error creating new user:", error);
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
      <Text style={styles.title}>Create New</Text>
      <Text style={styles.title}>Your Account</Text>
      <TouchableOpacity style={styles.image}>
        <Image
          source={require("../../assets/images/photo_profile.png")}
          style={{ width: 90, height: 90 }}
        />
        <Image
          source={require("../../assets/images/Add.png")}
          style={{
            width: 28,
            height: 28,
            position: "absolute",
            alignSelf: "center",
            bottom: -14,
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        label="Full Name"
        mode="outlined"
        secureTextEntry={false}
        textColor="white"
        onChangeText={(text) => {
          setFullname(text);
        }}
        value={fullname}
        theme={styles.textInputOutlineStyle}
      />
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
      <TextInput
        style={styles.textInput}
        label="Confirm Password"
        mode="outlined"
        secureTextEntry={false}
        underlineColor={"rgba(0,0,0,0)"}
        textColor="white"
        onChangeText={(text) => {
          setConPasword(text);
        }}
        value={conPassword}
        theme={styles.textInputOutlineStyle}
      />
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => createNewUser(fullname, email, password)}
      >
        <Text style={styles.textBtn}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0B0F2F",
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  image: {
    marginVertical: 24,
    alignSelf: "center",
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
    marginTop: 30,
    alignSelf: "center",
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
