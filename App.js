import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CarListScreen from "./screens/CarListScreen";
import CarDetailsScreen from "./screens/CarDetailsScreen.js"
import AboutScreen from "./screens/AboutScreen"; 

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "UrbanJungle": require("./assets/fonts/UrbanJungleDEMO.otf"), 
    "Thunderstorm": require("./assets/fonts/Thunderstorm.ttf"),
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
    "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CarList" component={CarListScreen} />
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
