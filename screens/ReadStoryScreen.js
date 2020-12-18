import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card, SearchBar } from "react-native-elements";
import db from "../config";

export default class ReadStoryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: [],
      search: "",
      lastVisibleStory: null,
    };
  }

  componentDidMount = () => {
    this.fetchMoreStories();
  };

  fetchMoreStories = async () => {
    const allStories = await db.collection("Stories").limit(10).get();

    allStories.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc,
      });
    });
  };

  searchFilterFunction = async (text) => {
    const story = await db
      .collection("Stories")
      .where("Title", "==", text)
      .get();
    story.docs.map((doc) => {
      this.setState({
        book: [doc.data()],
        lastVisibleStory: doc,
      });
    });

    console.log(this.state.book);
  };

  render() {
    return (
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
              marginBottom: 20,
            }}
          >
            Read A Story
          </Text>
          <SearchBar
            round
            searchIcon={{ size: 20 }}
            onChangeText={(text) => {
              if (text === "") {
                this.fetchMoreStories();
                this.setState({ search: text });
              } else {
                this.setState({ search: text });
                this.searchFilterFunction(text);
              }
            }}
            placeholder="Search A Story"
            value={this.state.search}
          />

          <FlatList
            data={this.state.book}
            renderItem={({ item }) => (
              <View style={{ marginTop: 10 }}>
                <Card>
                  <Text>{"Title: " + item.Title}</Text>
                  <Text>{"Author: " + item.Author}</Text>
                </Card>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
