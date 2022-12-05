import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/base";
import { db } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a new chat name"
        value={input}
        onChangeText={(e) => setInput(e)}
        leftIcon={<Icon name="wechat" />}
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create a new Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
