import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";

import db from "../config";
import firebase from "firebase";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submit = async () => {
    db.collection("Stories").add({
      Title: this.state.title,
      Author: this.state.author,
      Story: this.state.story,
    });
    alert("Thank You For Submitting Your Story.");
    this.setState({ title: "", author: "", story: "" });
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"padding"}
        enabled
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Think 🤔</Text>
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "rgb(255,51,51)",
              }}
            >
              Write A Story
            </Text>

            <TextInput
              style={styles.inputBox}
              placeholder="Story Title"
              onChangeText={(text) => {
                this.setState({ title: text });
              }}
              value={this.state.title}
            />

            <TextInput
              style={styles.inputBox}
              placeholder="Author"
              onChangeText={(text) => {
                this.setState({ author: text });
              }}
              value={this.state.author}
            />

            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Write Your Story"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={(text) => {
                this.setState({ story: text });
              }}
              value={this.state.story}
            />
            <View style={styles.inputView}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.submit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderWidth: 3.5,
    borderColor: "magenta",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  textArea: {
    width: 320,
    height: "auto",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "magenta",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  submitButton: {
    alignSelf: "center",
    backgroundColor: "#728cd4",
    width: 130,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  submitButtonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

