import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ICONS } from "../../assets/icons/AppIcons";
import { useNavigation } from "@react-navigation/native";
const TicketDetails = ({ route }) => {
  const navigation = useNavigation();
  const idTicket = route?.params.idTicket;
  const user = route?.params.user;
  const data = route?.params.data;

  const getTicketById = (id) =>
    user.myTicket.find((ticket) => ticket.idTicket === id);
  const setTicket = getTicketById(idTicket);
  const getDataById = (id, retries = 4) =>
    retries === 0 || data.find((item) => item.id === id);
  const setDataFilm = getDataById(setTicket?.dataFilm);
  //to use
  // console.log(setTicket);
  // console.log(setDataFilm);

  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 12, marginTop: 12 }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <Text style={styles.title}>TicketDetails</Text>
      <View style={[styles.row, { alignSelf: "center", margin: 24 }]}>
        <Image source={{ uri: setDataFilm.image }} style={styles.image}></Image>
        <View style={{ margin: 24 }}>
          <Text style={styles.subtitle}>{setDataFilm.name}</Text>
          <View style={styles.row}>
            <Image
              source={require("../../assets/images/Rating.png")}
              style={{ height: 12, width: 76, marginRight: 12 }}
            ></Image>
            <Text style={styles.text}>(4.7)</Text>
          </View>
          <Text style={styles.text}>{setDataFilm.genre}</Text>
          <Text style={styles.text}>{setDataFilm.duration}</Text>
        </View>
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
        <Text style={styles.text}>{setTicket.movieTheater}</Text>
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
        <Text style={styles.text}>{setTicket.createAt}</Text>
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
        <Text style={styles.text}>D7,D8,D9</Text>
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
        <Text style={styles.text}>Paid</Text>
        <Text style={styles.text}>IDR 300.000</Text>
      </View>
      <View
        style={{
          height: 0,
          borderWidth: 1,
          marginHorizontal: 24,
          borderStyle: "dashed",
          backgroundColor: "white",
        }}
      ></View>
      <Image
        source={require("../../assets/images/Barcode.png")}
        style={{ height: 200, width: 200, alignSelf: "center", margin: 14 }}
      ></Image>
      <Text style={[styles.text, { alignSelf: "center" }]}>ID Order</Text>
      <Text style={[styles.subtitle, { alignSelf: "center" }]}>
        {idTicket + setTicket.dataFilm}
      </Text>
    </View>
  );
};

export default TicketDetails;

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
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
});
