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
} from "react-native";

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
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

        <TextInput style={styles.inputBox} placeholder="Story Title" />

        <TextInput style={styles.inputBox} placeholder="Author" />

        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Write Your Story"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <View style={styles.inputView}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    alignSelf: "center",
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 3.5,
    borderColor: "magenta",
    marginTop: 20,
  },

  textArea: {
    alignSelf: "center",
    width: 335,
    height: "auto",
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 3.5,
    borderColor: "magenta",
    marginTop: 20,
  },
  submitButton: {
    alignSelf: "center",
    backgroundColor: "#728cd4",
    width: 130,
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
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
