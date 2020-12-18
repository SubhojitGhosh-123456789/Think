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
import * as firebase from "firebase";
export default class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      alert("Please Enter Your Details to Register");
    } else {
      this.setState({ isLoading: true });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          alert("You have Registered successfully!!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("TabNavigator");
        })
        .catch((error) => alert(error.message));
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
                Think Register
              </Text>
            </View>
            <View style={{ alignSelf: "center", alignItems: "center" }}>
              <TextInput
                style={styles.loginBox}
                placeholder="Email"
                onChangeText={(text) => {
                  this.setState({
                    email: text,
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
                  this.registerUser();
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  REGISTER
                </Text>
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
