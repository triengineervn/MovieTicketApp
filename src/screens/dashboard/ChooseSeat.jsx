import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
import { useNavigation } from "@react-navigation/native";
const ChooseSeat = ({ route }) => {
  const navigation = useNavigation();
  const date = route?.params.date;
  const data = route?.params.data;
  const item = route?.params.item;
  const totalPrice = "300.000";
  const seat = ["D7", "D8", "D9"];
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 24,
          marginLeft: 24,
          marginBottom: 12,
        }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{data[0]}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: COLORS.grey_bg_2,
                height: 20,
                width: 20,
                borderRadius: 4,
                marginRight: 8,
              }}
            ></View>
            <Text style={styles.text}>Avaible</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: COLORS.grey_bg_1,
                height: 20,
                width: 20,
                borderRadius: 4,
                marginRight: 8,
              }}
            ></View>
            <Text style={styles.text}>Blocked</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: COLORS.main_color,
                height: 20,
                width: 20,
                borderRadius: 4,
                marginRight: 8,
              }}
            ></View>
            <Text style={styles.text}>Your Seat</Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/images/Seat_Active.png")}
          style={{ height: 300, width: "100%", resizeMode: "contain" }}
        ></Image>
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: COLORS.grey_bg_2,
          alignSelf: "center",
        }}
      >
        Screen
      </Text>
      <Image
        source={require("../../assets/images/Screen.png")}
        style={{
          height: 47,
          width: 327,
          resizeMode: "stretch",
          alignSelf: "center",
        }}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          margin: 24,
          justifyContent: "space-around",
          marginTop: 100,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400 }}>
            Total Price (3 Tickets)
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 700, color: "white" }}>
            IDR {totalPrice}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.push("CheckOut", { date, data, item, totalPrice, seat })
          }
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "white",
            }}
          >
            Book Ticket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseSeat;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#04103A",
  },
  title: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 12,
  },
  subtitle: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: COLORS.main_color,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
});
