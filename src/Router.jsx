/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorMode, useTheme } from "native-base";
import auth from "@react-native-firebase/auth";
import MyTabBar from "./components/TabBar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Settings from "./screens/Settings";
import Pokedex from "./screens/Pokedex";
import Watchlist from "./screens/Watchlist";
import PokemonDetail from "./screens/PokemonDetail";
import Abilities from "./screens/Abilities";
import Moves from "./screens/Moves";
import Locations from "./screens/Locations";
import ForgetPassword from "./screens/ForgetPassword";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NestedTab() {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Router() {
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "Main" : "Login"}
    >
      {!user ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </>
      ) : (
        <>
          <Stack.Screen name="Main" component={NestedTab} />
          <Stack.Screen name="Pokedex" component={Pokedex} />
          <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
          <Stack.Screen name="Moves" component={Moves} />
          <Stack.Screen name="Abilities" component={Abilities} />
          <Stack.Screen name="Locations" component={Locations} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Router;
