import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../assets/colors/AppColor";
import { ICONS } from "../../assets/icons/AppIcons";
import DropDownPicker from "react-native-dropdown-picker";
const BookingTicket = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [index, setIndex] = React.useState([
    { label: "New York", value: "NY" },
    { label: "L.A", value: "LA" },
    { label: "San Francisco", value: "SF" },
  ]);
  const item = route?.params.item;
  const navigation = useNavigation();
  const [clickedDateItem, setClickedDateItem] = React.useState(false);
  const [date, setDate] = React.useState(false);
  const handlePressDateItem = (item) => {
    setClickedDateItem(item);
    setDate(Object.keys(item).toString());
  };

  const renderDateItem = ({ item }) => {
    const isClick = clickedDateItem === item;
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: 120,
          backgroundColor: isClick ? COLORS.main_color : COLORS.grey_bg_2,
          borderRadius: 14,
          marginRight: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => handlePressDateItem(item)}
      >
        <Text style={styles.text}>{Object.keys(item).toString()}</Text>
      </TouchableOpacity>
    );
  };
  const [data, setData] = React.useState([]);

  const ShowtimesComponent = ({
    booking,
    selectedDate,
    selectedMovieTheater,
  }) => {
    const selectedDateData = booking.date.find(
      (item) => Object.keys(item)[0] === selectedDate
    );
    const times = selectedDateData ? selectedDateData[selectedDate] : [];
    const filteredTimes = times.filter(
      (item) => item.movieTheater === selectedMovieTheater
    );

    const renderTimeItem = ({ item }) => {
      return (
        <View style={{ marginVertical: 8, flexDirection: "row" }}>
          {item.time.map((time) => {
            const handle = (time) => {
              setData([item.movieTheater, item.price, time]);
            };

            return (
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 120,
                  backgroundColor:
                    data[2] === time && data[0] == item.movieTheater
                      ? COLORS.main_color
                      : COLORS.grey_bg_2,
                  borderRadius: 14,
                  marginRight: 24,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={time}
                onPress={() => {
                  handle(time);
                }}
              >
                <Text style={styles.text}>{time}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };

    return (
      <FlatList
        data={filteredTimes}
        keyExtractor={(item) => item.movieTheater}
        renderItem={renderTimeItem}
      />
    );
  };
  // console.log(data);
  // console.log(date);
  return (
    <ScrollView style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 24,
          marginLeft: 24,
        }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <Text style={styles.title}>{item.name}</Text>
      <DropDownPicker
        dropDownContainerStyle={{
          width: 300,
          alignSelf: "center",
        }}
        style={{
          width: 300,
          alignSelf: "center",
        }}
        placeholder="Select Your Country"
        open={open}
        value={value}
        items={index}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setIndex}
      />
      <View style={{ marginLeft: 24 }}>
        <Text style={styles.header}>Choose Date</Text>
        <FlatList
          data={item.booking.date}
          keyExtractor={(item) => Object.keys(item)[0]}
          renderItem={renderDateItem}
          horizontal
        />
        <Text style={styles.header}>Central Park CGV</Text>
        <ShowtimesComponent
          booking={item.booking}
          selectedDate={date}
          selectedMovieTheater={"Central Park CGV"}
        />
        <Text style={styles.header}>FX Sudirman XXI</Text>
        <ShowtimesComponent
          booking={item.booking}
          selectedDate={date}
          selectedMovieTheater={"FX Sudirman XXI"}
        />
        <Text style={styles.header}>Kelapa Gading IMAX</Text>
        <ShowtimesComponent
          booking={item.booking}
          selectedDate={date}
          selectedMovieTheater={"Kelapa Gading IMAX"}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push("ChooseSeat", { item, data, date })}
        >
          {ICONS.arrow_right}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingTicket;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#04103A",
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 24,
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
    marginVertical: 24,
  },
  item: {
    height: 44,
    width: 88,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 24,
  },
  btn: {
    backgroundColor: COLORS.main_color,
    padding: 20,
    marginVertical: 24,
    alignSelf: "center",
    borderRadius: 45,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
});
