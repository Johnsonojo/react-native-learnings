import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../../components/ColorCounter";
import styles from "./style";

const COLOR_CHANGE = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const ReducerSquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_CHANGE });
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_CHANGE });
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_CHANGE });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_CHANGE });
        }}
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

export default ReducerSquareScreen;
