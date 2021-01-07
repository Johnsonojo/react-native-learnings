import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    backgroundColor: "orange",
    padding: 15,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "700",
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 15,
    width: 250,
  },
});

export default styles;
