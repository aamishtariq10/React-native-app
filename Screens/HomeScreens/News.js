import React, { Component } from "react";
import {
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";
import NewsSection from "./NewsSection";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home2 = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="News" component={News} />

      <Stack.Screen name="News Section" component={NewsSection} />
    </Stack.Navigator>
  );
};
export default Home2;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
    };
  }
  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=3f772a315def4599b096b5cf0abcb62a"
    );
    const json = await response.json();
    this.setState({ data: json.articles });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Latest</Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("News Section", { data: item });
              }}
            >
              <View style={styles.List}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Image
                      source={{ uri: item.urlToImage }}
                      style={{
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        width: 130,
                        height: 100,
                        //  borderRadius: 10,

                        //  resizeMode: "center",
                      }}
                    />
                    <Text
                      style={{ fontSize: 10, marginLeft: 15, marginTop: 5 }}
                    >
                      {`${item.publishedAt} 
                 `}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <View
                      style={{
                        flex: 1,
                        width: 190,
                        flexDirection: "column",

                        marginTop: 15,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          "{`${item.title} "`}
                        </Text>
                      </View>
                      {/* <View>
                        <Text>{`${item.description} `}</Text>
                      </View> */}
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        width: 130,
                      }}
                    >
                      <View>
                        <Text style={{ fontWeight: "bold" }}>Source : </Text>
                      </View>
                      <View>
                        <Text>
                          {`${item.source.name} 
                 `}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            //   <View style={{ marginTop: 30 }}>
            //     <Text>
            //       Source:
            //       {`${item.source.name}
            //       `}
            //     </Text>
            //   </View>
            // </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
  List: {
    flex: 1,
    marginTop: 5,
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
  },
});
