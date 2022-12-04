import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "@rneui/themed";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // For painting the screen and it is same as useEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(e) => {
            setName(e);
          }}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <Input
          placeholder="Profile Picture URL"
          type="text"
          value={imageUrl}
          onChangeText={(e) => {
            setImageUrl(e);
          }}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
