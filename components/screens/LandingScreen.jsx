import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LandingScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const animatedValue = React.useRef(
    new Animated.ValueXY({
      x: windowWidth / 2 - 60,
      y: windowHeight / 2 - 60,
    })
  ).current;
  const useEffect = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        fadeIn();
        useEffect();
      }}
    >
      <View style={styles.background}>
        <Animated.Image
          source={require("../../assets/component/illustrations/logo.png")}
          style={[styles.logo, { marginTop: animatedValue.y }]}
        ></Animated.Image>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Text style={styles.fadingTitle}>New Experience</Text>
          <Text style={styles.fadingText}>
            Watch a new movie much easier than any before
          </Text>
          <TouchableOpacity>
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
    width: "100%",
    alignItems: "center",
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
