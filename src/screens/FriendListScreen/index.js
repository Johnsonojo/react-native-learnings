import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./style";

const FriendList = () => {
  const friends = [
    {
      name: "Friend #1",
      age: 10,
    },
    {
      name: "Friend #2",
      age: 20,
    },
    {
      name: "Friend #3",
      age: 30,
    },
    {
      name: "Friend #4",
      age: 40,
    },
    {
      name: "Friend #5",
      age: 50,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.friendList}>Friend list</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.item}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default FriendList;
