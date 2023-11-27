import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";

const LandingScreen = ({ navigation }) => {
  const animatedValue = (React.y = useRef(new Animated.Value(0)).current);
  const useEffect = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        useEffect();
        fadeIn();
      }}
    >
      <View style={styles.background}>
        <Animated.Image
          source={require("../../assets/images/logo.png")}
          style={[styles.logo, { transform: [{ translateY }] }]}
        ></Animated.Image>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.fadingTitle}>New Experience</Text>
          <Text style={styles.fadingText}>
            Watch a new movie much easier than any before
          </Text>
          <TouchableOpacity onPress={() => navigation.push("SignIn")}>
            <View style={styles.btnView}>
              <Text style={styles.btnText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#0B0F2F",
  },
  logo: {
    width: 200,
    height: 200,
  },
  fadingContainer: {
    padding: 16,
  },
  fadingTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 500,
    padding: 16,
  },
  fadingText: {
    textAlign: "center",
    paddingHorizontal: 70,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.70)",
    fontWeight: 300,
  },
  btnView: {
    margin: 60,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#1DC7F7",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
