import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
StatusBar;
const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => {
        <View style={{ marginLeft: 30 }}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL || "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F268533%2Fpexels-photo-268533.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-268533.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&tbnid=nwiTKnJXTwcwcM&vet=12ahUKEwjWgZe6seD7AhXbmmoFHbDvBJcQMygAegUIARDeAQ..i&docid=B51x0PBR9KNzvM&w=1920&h=1278&itg=1&q=images&ved=2ahUKEwjWgZe6seD7AhXbmmoFHbDvBJcQMygAegUIARDeAQ"}} />
        </View>;
      },
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
