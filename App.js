import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BoxScreen from "./src/screens/BoxScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
import FriendListScreen from "./src/screens/FriendListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ReducerSquareScreen from "./src/screens/ReducerSquareScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import UsersScreen from "./src/screens/UsersScreen";

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Counter" component={CounterScreen} />
        <Screen name="Friends" component={FriendListScreen} />
        <Screen name="Colors" component={ColorScreen} />
        <Screen name="Square" component={SquareScreen} />
        <Screen name="ReducerSquare" component={ReducerSquareScreen} />
        <Screen name="Users" component={UsersScreen} />
        <Screen name="Text" component={TextScreen} />
        <Screen name="Box" component={BoxScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
