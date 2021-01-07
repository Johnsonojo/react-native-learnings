import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./style";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <View style={styles.buttonStyle}>
        <Button
          title="Friends "
          onPress={() => {
            navigation.navigate("Friends");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Counter"
          onPress={() => {
            navigation.navigate("Counter");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Colors"
          onPress={() => {
            navigation.navigate("Colors");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Square"
          onPress={() => {
            navigation.navigate("Square");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Reducer Square"
          onPress={() => {
            navigation.navigate("ReducerSquare");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="User Profile"
          onPress={() => {
            navigation.navigate("Users");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Text Screen"
          onPress={() => {
            navigation.navigate("Text");
          }}
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Box Screen"
          onPress={() => {
            navigation.navigate("Box");
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
