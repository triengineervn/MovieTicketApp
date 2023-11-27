import React from "react";
import ProfileScreen from "../screens/dashboard/ProfileScreen";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TicketDetails from "../screens/dashboard/TicketDetails";
import { dataUrl } from "../components";
import TopUpScreen from "../screens/dashboard/TopUpScreen";
import PaidScreen from "../screens/dashboard/PaidScreen";
import FilmDetails from "../screens/dashboard/FilmDetails";
import BookingTicket from "../screens/dashboard/BookingTicket";
import ChooseSeat from "../screens/dashboard/ChooseSeat";
import CheckOut from "../screens/dashboard/CheckOut";
import SuccessBooking from "../screens/dashboard/SuccessBooking";
import EditProfile from "../screens/dashboard/EditProfile";
const Stack = createNativeStackNavigator();
const AppStack = ({ route }) => {
  const user = route?.params.user;
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        initialParams={{ user }}
      />
      <Stack.Screen
        name="FilmDetails"
        component={FilmDetails}
        initialParams={{ data }}
      />
      <Stack.Screen
        name="BookingTicket"
        component={BookingTicket}
        initialParams={{ user }}
      />
      <Stack.Screen name="ChooseSeat" component={ChooseSeat} />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        initialParams={{ user }}
      />
      <Stack.Screen name="SuccessBooking" component={SuccessBooking} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        initialParams={{ user }}
      />
      <Stack.Screen
        name="TicketDetails"
        component={TicketDetails}
        initialParams={{ user, data }}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUpScreen}
        initialParams={{ user }}
      />
      <Stack.Screen name="Paid" component={PaidScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
