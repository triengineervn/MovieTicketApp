import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const TicketScreen = ({ user, data }) => {
  const navigation = useNavigation();
  const getTicketList = user.myTicket;
  const [onClick, setOnClick] = React.useState("All");
  const handleButtonPress = (buttonType) => {
    setOnClick(buttonType);
  };

  const getDataById = (id, retries = 4) => {
    const item = data.find((item) => item.id === id);

    if (item !== null || retries === 0) {
      return item;
    } else {
      return getDataById(id, retries - 1);
    }
  };

  const renderTicketItem = ({ item }) => {
    const dataById = getDataById(item.dataFilm.toString());
    return (
      <TouchableOpacity
        style={styles.ticketItem}
        onPress={() =>
          navigation.push("TicketDetails", { idTicket: item.idTicket })
        }
      >
        <Image style={styles.image} source={{ uri: dataById.image }}></Image>
        <View style={{ margin: 8 }}>
          <Text style={styles.subtitle}>{dataById.name}</Text>
          <Text style={[styles.text, { marginVertical: 8 }]}>
            {item.createAt}
          </Text>
          <Text style={styles.text}>{item.movieTheater}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.background}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={{
            marginTop: 300,
          }}
        />
      ) : (
        <View>
          <Text style={styles.title}>My Ticket</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 24,
            }}
          >
            <TouchableOpacity
              style={[
                styles.btnHeader,
                {
                  backgroundColor:
                    onClick === "All" ? COLORS.main_color : COLORS.dark_bg_1,
                },
              ]}
              onPress={() => handleButtonPress("All")}
            >
              <Text style={styles.subtitle}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnHeader,
                {
                  backgroundColor:
                    onClick === "News" ? COLORS.main_color : COLORS.dark_bg_1,
                },
              ]}
              onPress={() => handleButtonPress("News")}
            >
              <Text style={styles.subtitle}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnHeader,
                {
                  backgroundColor:
                    onClick === "Expired"
                      ? COLORS.main_color
                      : COLORS.dark_bg_1,
                },
              ]}
              onPress={() => handleButtonPress("Expired")}
            >
              <Text style={styles.subtitle}>Expired</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              marginHorizontal: 24,
              backgroundColor: COLORS.grey_bg_1,
            }}
          ></View>
          <FlatList
            data={getTicketList}
            keyExtractor={(item) => item.idTicket}
            renderItem={renderTicketItem}
          ></FlatList>
        </View>
      )}
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.dark_bg_1,
  },
  title: {
    marginStart: 24,
    marginTop: 24,
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
  row: {
    flexDirection: "row",
    marginTop: 13,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnHeader: {
    padding: 12,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
  ticketItem: {
    flexDirection: "row",
    marginHorizontal: 24,
    alignItems: "center",
    marginVertical: 12,
  },
  image: {
    height: 120,
    width: 80,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
});
