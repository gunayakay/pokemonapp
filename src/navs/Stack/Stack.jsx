import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home';
import Notifications from 'screens/Notifications';
import WatchList from 'screens/WatchList';

const Stack = createNativeStackNavigator();

const NestedStack = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="WatchList" component={WatchList} />
    </Stack.Navigator>
  </NavigationContainer>;
};

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NestedStack" component={NestedStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
