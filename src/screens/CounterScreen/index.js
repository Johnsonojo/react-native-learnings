import React, { useState, useReducer } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import styles from "./style";

const COUNT_CHANGE = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, count: state.count + action.payload };
    case "decrease_count":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>Count is: {state.count}</Text>

      {/* <View style={styles.buttonContainer}>
        <Button
          title="Increase Count"
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Decrease Count"
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View> */}

      <View style={styles.buttonContainer}>
        <Button
          title="Increase Count"
          onPress={() => {
            dispatch({ type: "increase_count", payload: COUNT_CHANGE });
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Decrease Count"
          onPress={() => {
            dispatch({ type: "decrease_count", payload: COUNT_CHANGE });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CounterScreen;
