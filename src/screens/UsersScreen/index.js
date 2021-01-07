import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { usersData } from "../UsersScreen/mock";
import styles from "./style";

const UsersScreen = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const newUsers = async () => {
    await usersData.forEach((eachUser) => {
      eachUser.Image = "https://picsum.photos/200";
    });
    setAllUsers(usersData);
  };

  useEffect(() => {
    if (!allUsers.length) {
      newUsers();
    }
  }, [allUsers]);

  return (
    <View>
      <FlatList
        data={allUsers}
        keyExtractor={(item) => item.Id}
        columnWrapperStyle={{ justifyContent: "center" }}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <Text
              style={{
                marginTop: 20,
                width: 100,
              }}
              onPress={() => setUser(item)}
            >
              {item.Name}
            </Text>
          );
        }}
      />

      <Text>{user.Id}</Text>
      <Text>{user.Name}</Text>
      <Text>{user.Street}</Text>
      <Image style={styles.imageSize} source={{ uri: user?.Image }} />
    </View>
  );
};

export default UsersScreen;
