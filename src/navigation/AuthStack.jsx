import LandingScreen from "../screens/auth/LandingScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import UserProfiling from "../screens/auth/UserProfiling";
import ConfirmationProfile from "../screens/auth/ConfirmationProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Group>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="UserProfiling" component={UserProfiling} />
        <Stack.Screen
          name="ConfirmationProfile"
          component={ConfirmationProfile}
        />
      </Stack.Group>
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}
