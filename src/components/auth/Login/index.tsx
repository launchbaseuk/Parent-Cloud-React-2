import React, { useState, useEffect } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../contexts/auth-context";

// Components
import Input from "../../shared/Input";
import AuthSharedScreen from "../AuthScreenShared";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();
  const { login } = useAuth();

  const handleUsername = (e: any) => {
    setUsername(e);
  };
  const handlePassword = (e: any) => {
    setPassword(e);
  };

  const handleLogin = () => {
    console.log(username, password);
    login(username, password);
  };

  return (
    <View style={styles.wrapper}>
      <AuthSharedScreen
        middleText={"New to Parent Cloud?"}
        buttonTextTop={"Login"}
        buttonTextBottom={"Register"}
        routeTop={"ForgotPassword"}
        routeBot={"Signup"}
        loginFunc={handleLogin}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.content}>
              Login to your Parent Cloud account
            </Text>
          </View>
          <View
            style={{
              marginBottom: 100,
              marginTop: 32,
              justifyContent: "center",
            }}
          >
            <Input
              label="Email Address"
              placeholder="example@gmail.com"
              value={username}
              onChangeText={handleUsername}
            />
            <Input
              label="Password"
              placeholder="Minimum 6 characters"
              value={password}
              onChangeText={handlePassword}
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthSharedScreen>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 115,
    alignItems: "center",
  },
  title: {
    color: "#11535C",
    fontSize: 31,
    fontFamily: "SofiaProBlack",
    textAlign: "center",
  },
  contentWrapper: {
    width: "100%",
    alignSelf: "center",
  },
  content: {
    fontSize: 16,
    marginTop: 8,
    fontFamily: "Montserrat-Regular",
    color: "#150E00",
    maxWidth: 200,
    textAlign: "center",
    alignSelf: "center",
  },
  forgotPassword: {
    color: "#D98E04",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    lineHeight: 19,
  },
});
