import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  firstRowStyle: {
    borderWidth: 2,
    borderColor: "black",
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  secondRowStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  appTextStyle: {
    textAlign: "center",
    fontSize: 40,
  },
  textOneStyle: {
    backgroundColor: "brown",
    height: 100,
    width: 100,
    textAlign: "center",
  },
  textTwoStyle: {
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
  textThreeStyle: {
    alignSelf: "center",
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
});

export default styles;
