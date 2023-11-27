import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ICONS } from "../../assets/icons/AppIcons";
import { TextInput } from "react-native-paper";
import { UriUrl } from "../../components/index";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPasword] = React.useState("");
  const [conPassword, setConPasword] = React.useState("");

  const updateUser = async (fullname, email, password) => {
    try {
      const response = await fetch(UriUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert("Update Success");
    } catch (error) {
      console.error("Error updating user:", error.message);
      alert("Update Failed. Please check the console for more details.");
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
        onPress={() => updateUser(fullname, email, password)}
      >
        <Text style={styles.textBtn}>Update My Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;

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
    borderRadius: 20,
    marginHorizontal: 24,
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
