import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.firstRowStyle}>
        <Text style={styles.appTextStyle}>App</Text>
      </View>
      <View style={styles.secondRowStyle}>
        <Text style={styles.textOneStyle} />
        <Text style={styles.textTwoStyle} />
      </View>
      <Text style={styles.textThreeStyle} />
    </View>
  );
};

export default BoxScreen;
