import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { ICONS } from "../../assets/icons/AppIcons";
import { COLORS } from "../../assets/colors/AppColor";
import { useNavigation } from "@react-navigation/native";

const idr = [
  { id: "1", idr: "50.000" },
  { id: "2", idr: "100.000" },
  { id: "3", idr: "150.000" },
  { id: "4", idr: "200.000" },
  { id: "5", idr: "250.000" },
  { id: "6", idr: "500.000" },
  { id: "7", idr: "750.000" },
  { id: "8", idr: "1.000.000" },
];

const TopUpScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");
  const [isClick, setIsClick] = React.useState(null);
  const renderItem = ({ item }) => {
    const isClicked = isClick === item.id;
    return (
      <TouchableOpacity
        style={[
          styles.item,
          {
            backgroundColor: isClicked ? COLORS.main_color : COLORS.dark_bg_2,
          },
        ]}
        onPress={() => {
          handleItemPress({ item });
        }}
      >
        <Text style={styles.text}>IDR</Text>
        <Text style={styles.text}>{item.idr}</Text>
      </TouchableOpacity>
    );
  };
  const handleItemPress = ({ item }) => {
    search === "" ? setIsClick(item.id) : setIsClick(null);
    setSearch(item.idr);
  };
  const handleInputChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setSearch(numericValue);
    paid = search;
  };

  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 12, marginTop: 12, alignSelf: "flex-start" }}
      >
        {ICONS.arrow_left}
      </TouchableOpacity>
      <Text style={styles.title}>Top Up</Text>
      <TextInput
        style={styles.searchBar}
        label="Ammount"
        mode="outlined"
        secureTextEntry={false}
        textColor="white"
        onChangeText={handleInputChange}
        value={isClick === null ? search : ""}
        theme={styles.textInputOutlineStyle}
      />
      <FlatList
        data={idr}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          search === ""
            ? Alert.alert("Choose your options")
            : navigation.push("Paid", { search })
        }
      >
        <Text style={{ fontSize: 24, fontWeight: 500, color: "white" }}>
          Top Up Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.dark_bg_1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 56,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 400,
  },
  searchBar: {
    backgroundColor: COLORS.dark_bg_2,
    width: 300,
    marginBottom: 24,
  },
  textInputOutlineStyle: {
    colors: {
      primary: COLORS.main_color,
      underlineColor: "transparent",
      background: "white",
    },
  },
  item: {
    margin: 9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    width: 180,
    height: 80,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 20,
    backgroundColor: COLORS.main_color,
    marginBottom: 32,
  },
});
