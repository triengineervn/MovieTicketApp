import { Image, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/dashboard/HomeScreen";
import TicketScreen from "../screens/dashboard/TicketScreen";
import WalletScreen from "../screens/dashboard/WalletScreen";
import { COLORS } from "../assets/colors/AppColor";
import { dataUrl } from "../components/index";

const Tab = createBottomTabNavigator();
const TabNavigator = ({ route }) => {
  const user = route?.params.user;
  const isIos = Platform.OS === "ios";
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchData = async () => {
    try {
      const response = await fetch(dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching photo list:", error.message);
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.dark_bg_1,
          borderTopWidth: 0,
          height: isIos ? 100 : 75,
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarActiveTintColor: COLORS.white_bg,
        tabBarInactiveTintColor: COLORS.grey_bg_2,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={() => <HomeScreen user={user} data={data} />}
        options={{
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/Home_active.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              ></Image>
            ) : (
              <Image
                source={require("../assets/icons/Home_unactive.png")}
                style={{ width: size, height: size, tintColor: color }}
              ></Image>
            ),
        }}
      />
      <Tab.Screen
        name="WalletTab"
        component={() => <WalletScreen user={user} data={data} />}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/Pocket_active.png")}
                style={{ width: size, height: size, tintColor: color }}
              ></Image>
            ) : (
              <Image
                source={require("../assets/icons/Pocket_unactive.png")}
                style={{ width: size, height: size, tintColor: color }}
              ></Image>
            ),
        }}
      />
      <Tab.Screen
        name="TicketTab"
        component={() => <TicketScreen user={user} data={data} />}
        options={{
          tabBarLabel: "Ticket",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Image
                source={require("../assets/icons/Ticket_active.png")}
                style={{ width: size, height: size, tintColor: color }}
              ></Image>
            ) : (
              <Image
                source={require("../assets/icons/Ticket_unactive.png")}
                style={{ width: size, height: size, tintColor: color }}
              ></Image>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
