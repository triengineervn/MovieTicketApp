import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
const CheckOut = ({ route }) => {
  const navigation = useNavigation();
  const user = route?.params.user;
  const data = route?.params.data;
  const date = route?.params.date;
  const item = route?.params.item;
  const totalPrice = route?.params.totalPrice;
  const seat = route?.params.seat;
  console.log(user.myTicket);
  console.log(item.id);

  const getTicketById = (item) =>
    user.myTicket.find((ticket) => ticket.dataFilm === item.id);
  const setTicket = getTicketById(item);
  console.log(setTicket.idTicket);
  return (
    <ScrollView style={styles.background}>
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
      <Text style={styles.title}>CheckOut</Text>
      <Text style={styles.title}>Movie</Text>
      <View style={[styles.row, { alignSelf: "center", margin: 24 }]}>
        <Image source={{ uri: item.image }} style={styles.image}></Image>
        <View style={{ margin: 24 }}>
          <Text style={styles.subtitle}>{item.name}</Text>
          <View style={styles.row}>
            <Image
              source={require("../../assets/images/Rating.png")}
              style={{ height: 12, width: 76, marginRight: 12 }}
            ></Image>
            <Text style={styles.text}>(4.7)</Text>
          </View>
          <Text style={styles.text}>{item.genre}</Text>
          <Text style={styles.text}>{item.duration}</Text>
        </View>
      </View>
      <View
        style={{ height: 2, marginHorizontal: 24, backgroundColor: "white" }}
      ></View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>ID Order</Text>
        <Text style={styles.text}>
          {setTicket.idTicket + setTicket.dataFilm}
        </Text>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Cinema</Text>
        <Text style={styles.text}>{data[0]}</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Date & Time</Text>
        <Text style={styles.text}>
          {date} {data[2]}
        </Text>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Seat Number</Text>
        <Text style={styles.text}>{seat.join(",")}</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>{data[1]} * 3</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Total</Text>
        <Text style={[styles.text, { fontWeight: 700 }]}>{totalPrice}</Text>
      </View>
      <View
        style={{ height: 2, marginHorizontal: 24, backgroundColor: "white" }}
      ></View>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginVertical: 8,
          },
        ]}
      >
        <Text style={styles.text}>Your Wallet</Text>
        <Text
          style={[styles.text, { fontWeight: 700, color: COLORS.main_color }]}
        >
          {user.wallet}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push("SuccessBooking")}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
          Check Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#04103A",
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  image: {
    height: 120,
    width: 80,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
  btn: {
    marginTop: 28,
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#3D58F8",
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
});
