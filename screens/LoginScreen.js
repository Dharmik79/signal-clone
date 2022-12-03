import { View, Text, StyleSheet ,KeyboardAvoidingView} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/themed";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpn97urv4nh4DDfrfMPJCm_71RcsfMEL0Dt4Kaa6NJMJiNzeXhQ_hGmZ0sPUbGX2gv1cc&usqp=CAU",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          onChangeText={(e) => {
            setEmail(e);
          }}
          value={email}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          onChangeText={(e) => {
            setPassword(e);
          }}
          value={password}
        />
        </View>
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button
          containerStyle={styles.button}
          title="Register"
          type="outline"
        />
     
      <View style={{height:100}}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padidng:10,
    backgroundColor:"color"
  },
  inputContainer: {
    width:300
  },
  button: {
    width:200,
    marginTop:10
  },
});
