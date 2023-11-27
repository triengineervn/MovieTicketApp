import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { ICONS } from "../../assets/icons/AppIcons";
import { COLORS } from "../../assets/colors/AppColor";
import { UriUrl } from "../../components/index.js";
import { genresList } from "../../components/genresList.js";
const UserProfiling = ({ navigation, route }) => {
  const user = route?.params.data;
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleGenrePress = (genre) => {
    if (favoriteMovies.some((movie) => movie.genre.id === genre.id)) {
      const updatedFavorites = favoriteMovies.filter(
        (movie) => movie.genre.id !== genre.id
      );
      setFavoriteMovies(updatedFavorites);
    } else {
      setFavoriteMovies([...favoriteMovies, { genre }]);
    }
  };

  const renderGenreItem = ({ item }) => {
    const isFavorite = favoriteMovies.some(
      (movie) => movie.genre.id === item.id
    );
    return (
      <TouchableOpacity
        style={[
          styles.genreItem,
          {
            backgroundColor: isFavorite ? COLORS.main_color : COLORS.dark_bg_1,
          },
        ]}
        onPress={() => handleGenrePress(item)}
      >
        <Text style={styles.genreText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const sendFavoriteMoviesToApi = async () => {
    try {
      const payload = {
        email: user.email,
        password: user.password,
        fullname: user.fullname,
        avatar: user.avatar,
        favoriteGenre: favoriteMovies.map((movie) => ({
          genreId: movie.genre.id,
          genreName: movie.genre.name,
        })),
      };

      const response = await fetch(`${UriUrl}${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        console.log("Favorite movies sent to API successfully!");
      } else {
        console.error(
          "Failed to send favorite movies to API:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error sending favorite movies to API:", error);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity style={{ marginLeft: 12, marginTop: 12 }}>
        {ICONS.arrow_left}
      </TouchableOpacity>
      <View style={{ margin: 12 }}>
        <Text style={styles.title}>Select Your</Text>
        <Text style={styles.title}>Favorite Genre</Text>
      </View>
      <FlatList
        data={genresList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGenreItem}
        numColumns={2}
      />
      <TouchableOpacity
        onPress={() => {
          sendFavoriteMoviesToApi();
          navigation.push("ConfirmationProfile", { user: user });
        }}
        style={styles.btnLogin}
      >
        {ICONS.arrow_right}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserProfiling;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0B0F2F",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 500,
  },
  btnLogin: {
    alignSelf: "center",
    backgroundColor: COLORS.main_color,
    borderRadius: 45,
    padding: 24,
    marginBottom: 90,
  },
  genreItem: {
    margin: 12,
    padding: 12,
    borderRadius: 6,
    height: 70,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  genreText: {
    color: "white",
    fontSize: 24,
    fontWeight: 300,
  },
});
