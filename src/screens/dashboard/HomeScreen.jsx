import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/colors/AppColor";
import { TextInput } from "react-native-paper";
import { genresList } from "../../components/genresList.js";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = ({ user, data }) => {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");
  const [filterMovies, setFilterMovies] = React.useState([]);

  const handleGenrePress = (genre) => {
    if (filterMovies.some((movie) => movie.genre.id === genre.id)) {
      const updatedFilter = filterMovies.filter(
        (movie) => movie.genre.id !== genre.id
      );
      setFilterMovies(updatedFilter);
    } else {
      setFilterMovies([...filterMovies, { genre }]);
    }
  };

  const renderGenreItem = ({ item }) => {
    const isFilter = filterMovies.some((movie) => movie.genre.id === item.id);
    return (
      <TouchableOpacity
        style={[
          styles.genreItem,
          {
            backgroundColor: isFilter ? "#1DC7F7" : COLORS.dark_bg_2,
          },
        ]}
        onPress={() => handleGenrePress(item)}
      >
        <Text style={styles.genreText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderBannerItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push("FilmDetails", { item, user })}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.bannerItem}
          resizeMode="cover"
        ></Image>
      </TouchableOpacity>
    );
  };

  const renderComingItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.comingItem}
          resizeMode="cover"
        ></Image>
      </View>
    );
  };

  return (
    <ScrollView
      scrollEnabled={true}
      nestedScrollEnabled={true}
      style={styles.background}
    >
      <SafeAreaView>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Find Your Best</Text>
            <Text style={styles.title}>Movie</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push("Profile")}>
            <Image
              source={require("../../assets/images/photo_profile.png")}
              style={styles.avatar}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search movie"
            textColor="white"
            onChangeText={(text) => {
              setSearch(text);
            }}
            left={<TextInput.Icon icon="magnify" color={"white"} />}
            value={search}
          />
          <TouchableOpacity
            style={{
              borderRadius: 14,
              backgroundColor: COLORS.main_color,
              marginEnd: 24,
              padding: 11,
            }}
          >
            <Image
              source={require("../../assets/icons/Control.png")}
              style={styles.btnControl}
            ></Image>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={genresList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderGenreItem}
          horizontal
          style={{ margin: 24 }}
        />
        <Text style={styles.title}>Now Playing</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBannerItem}
          horizontal
          style={{ margin: 24 }}
        />
        <Text style={styles.title}>Coming Soon</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderComingItem}
          horizontal
          style={{ margin: 24 }}
        />
        <Text style={styles.title}>Promo</Text>
        <View
          style={[
            styles.row,
            {
              marginHorizontal: 24,
              borderRadius: 20,
              backgroundColor: COLORS.main_color,
            },
          ]}
        >
          <View>
            <Text style={styles.text}>Student Holiday</Text>
            <Text style={styles.subtext}>Maximal only for two people</Text>
          </View>
          <Text style={[styles.title, { marginEnd: 24 }]}>
            OFF <Text style={{ fontWeight: 700 }}>50%</Text>
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              marginHorizontal: 24,
              borderRadius: 20,
              backgroundColor: COLORS.main_color,
            },
          ]}
        >
          <View>
            <Text style={styles.text}>Student Holiday</Text>
            <Text style={styles.subtext}>Maximal only for two people</Text>
          </View>
          <Text style={[styles.title, { marginEnd: 24 }]}>
            OFF <Text style={{ fontWeight: 700 }}>50%</Text>
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              marginHorizontal: 24,
              borderRadius: 20,
              backgroundColor: COLORS.main_color,
            },
          ]}
        >
          <View>
            <Text style={styles.text}>Student Holiday</Text>
            <Text style={styles.subtext}>Maximal only for two people</Text>
          </View>
          <Text style={[styles.title, { marginEnd: 24 }]}>
            OFF <Text style={{ fontWeight: 700 }}>50%</Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.dark_bg_1,
  },
  avatar: {
    width: 48,
    height: 48,
    marginEnd: 24,
  },
  title: {
    marginStart: 24,
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
  searchBar: {
    backgroundColor: COLORS.dark_bg_2,
    marginStart: 24,
    width: 300,
  },
  btnControl: {
    padding: 11,
  },
  genreItem: {
    margin: 6,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
  },
  bannerItem: {
    margin: 6,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 240,
    width: 320,
  },
  comingItem: {
    margin: 6,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 240,
    width: 160,
  },
  genreText: {
    color: "white",
    fontSize: 15,
    fontWeight: 300,
  },
  text: {
    color: COLORS.white_bg,
    fontSize: 14,
    fontWeight: 500,
    marginTop: 24,
    marginStart: 16,
  },
  subtext: {
    color: COLORS.white_bg,
    fontSize: 14,
    marginStart: 16,
    marginBottom: 24,
    marginTop: 4,
  },
});
