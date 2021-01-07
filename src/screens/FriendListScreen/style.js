import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  friendList: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  item: {
    backgroundColor: "orange",
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "700",
    borderRadius: 5,
  },
});

export default styles;
