import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./style";

const TextScreen = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {inputValue.length < 5 ? (
        <Text style={styles.warning}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
      {/* <Text>{inputValue}</Text> */}
    </View>
  );
};

export default TextScreen;
