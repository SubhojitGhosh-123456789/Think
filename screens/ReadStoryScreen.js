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

export default class ReadStoryScreen extends React.Component {
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
          Read A Story
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <TextInput style={styles.inputBox} placeholder="Search Story" />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>🔍</Text>
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
    marginLeft: 10,
    width: 280,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 3.5,
    borderColor: "magenta",
    margin: 10,
    alignSelf: "center",
  },
  submitButton: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#728cd4",
    width: 50,
    borderRadius: 100,
    height: 50,
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 30,
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
