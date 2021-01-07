import React, { useState } from "react";
import { View } from "react-native";
import ColorCounter from "../../components/ColorCounter";
import styles from "./style";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_CHANGE = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_CHANGE)}
        onDecrease={() => setColor("red", -1 * COLOR_CHANGE)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_CHANGE)}
        onDecrease={() => setColor("green", -1 * COLOR_CHANGE)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_CHANGE)}
        onDecrease={() => setColor("blue", -1 * COLOR_CHANGE)}
      />

      <View style={styles.squareContainer}>
        <View
          style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            height: 300,
            marginTop: 20,
            width: 300,
          }}
        />
      </View>
    </View>
  );
};

export default SquareScreen;
