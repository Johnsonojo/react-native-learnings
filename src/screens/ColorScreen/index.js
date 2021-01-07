import React, { useState } from "react";
import { Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: `${item}`,
              }}
            />
          );
        }}
        columnWrapperStyle={{ justifyContent: "center" }}
        numColumns={4}
      />
    </View>
  );
};

export default ColorScreen;
