import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => {
        return (
          <View style={{ marginLeft: 0 }}>
            <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
              <Avatar
                rounded
                source={{
                  uri: auth.currentUser.photoURL
                    ? auth.currentUser.photoURL
                    : "https://dharmik79.github.io/portfolio.github.io/images/profile.jpeg",
                }}
              />
            </TouchableOpacity>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camerao" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddChat")}
              activeOpacity={0.5}
            >
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => {
          return <CustomListItem key={id} id={id} chatName={chatName} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
