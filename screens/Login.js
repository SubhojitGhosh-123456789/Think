import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import db from "../config";
import firebase from "firebase";
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          alert("You Have Logged in Successfully!!");
          this.props.navigation.navigate("TabNavigator");
        }
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert(
              "User doesn't Exist. Please Register If You do not have an Account."
            );
            break;
          case "auth/invalid-email":
            alert("Incorrect Email entered");
            break;
          case "auth/wrong-password":
            alert("Incorrect Password entered");
            break;
        }
      }
    } else {
      alert("Please Enter Your Email and Password");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ alignItems: "center", marginTop: 20 }}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Image
                source={require("../assets/book.png")}
                style={{ width: 150, height: 150, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                Think Login
              </Text>
            </View>
            <View style={{ alignSelf: "center", alignItems: "center" }}>
              <TextInput
                style={styles.loginBox}
                placeholder="Email"
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />

              <TextInput
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 200,
                  backgroundColor: "#fb5b5a",
                  height: 38,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                  borderWidth: 2,
                  borderColor: "white",
                }}
                onPress={() => {
                  this.login(this.state.emailId, this.state.password);
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Text style={styles.wText}>Do not have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("RegisterScreen");
                }}
              >
                <Text style={[styles.wText, { color: "blue" }]}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loginBox: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    width: 300,
    textAlign: "center",
    marginTop: 30,
  },

  wText: {
    color: "white",
    fontSize: 15,
  },
});
