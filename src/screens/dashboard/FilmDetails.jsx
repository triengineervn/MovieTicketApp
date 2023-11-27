import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
import { useNavigation } from "@react-navigation/native";
const FilmDetails = ({ route }) => {
  const item = route?.params.item;
  console.log(item);
  const navigation = useNavigation();
  const renderCasterItem = ({ item }) => {
    return (
      <View style={{ marginRight: 24, width: 72 }}>
        <Image
          source={{ uri: item.imageCaster }}
          style={{ width: 72, height: 72, borderRadius: 10 }}
        ></Image>
        <Text
          style={[styles.text, { textAlign: "center" }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.nameCaster}
        </Text>
      </View>
    );
  };
  const renderTrailerItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={{ height: 144, width: 247, borderRadius: 10, marginRight: 24 }}
    />
  );
  return (
    <ScrollView style={styles.background}>
      <ImageBackground
        style={{ width: "100%", height: 250, backgroundColor: "black" }}
        imageStyle={{ opacity: 0.8 }}
        source={{ uri: item.trailer[0] }}
      >
        <ImageBackground
          style={{ width: "100%", height: 275, justifyContent: "flex-end" }}
          source={require("../../assets/images/Shadow.png")}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 24,
              left: 24,
            }}
          >
            {ICONS.arrow_left}
          </TouchableOpacity>
          <View style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.image}></Image>
            <View>
              <Text style={styles.title}>{item.name}</Text>
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
        </ImageBackground>
      </ImageBackground>
      <View
        style={[
          styles.row,
          {
            marginTop: 50,
            alignSelf: "center",
          },
        ]}
      >
        <View style={{ marginRight: 50 }}>
          <Text style={styles.title}>About Movie</Text>
          <View
            style={{
              height: 2,
              width: 78,
              backgroundColor: "white",
              alignSelf: "center",
            }}
          ></View>
        </View>
        <Text style={[styles.title, { fontWeight: 400 }]}>Reivew</Text>
      </View>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.header}>Synopsis</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.header}>Cast & Crew</Text>
        <FlatList
          data={item.cast}
          keyExtractor={(item) => item.idCaster}
          renderItem={renderCasterItem}
          horizontal
        ></FlatList>
        <Text style={styles.header}>Trailer and song</Text>
        <FlatList
          data={item.trailer}
          keyExtractor={(item) => item}
          renderItem={renderTrailerItem}
          horizontal
        ></FlatList>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push("BookingTicket", { item })}
        >
          <Text style={styles.textBtn}>Book tickets</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilmDetails;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#04103A",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
    marginVertical: 24,
  },
  textBtn: {
    fontSize: 24,
    fontWeight: 500,
    color: "white",
  },
  btn: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: COLORS.main_color,
    marginBottom: 32,
    marginTop: 32,
  },
  image: {
    height: 170,
    width: 120,
    marginHorizontal: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
});
