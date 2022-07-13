//import React in our code
import React from "react";
//import all the components we are going to use
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
} from "react-native";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";

const NewsSection = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "justify",
            }}
          >
            "{route.params.data.title}"
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            marginBottom: 5,
          }}
        ></View>
        <Image
          source={{ uri: route.params.data.urlToImage }}
          style={{
            width: 330,
            height: 200,
            //  borderRadius: 10,

            resizeMode: "center",
          }}
        />

        <View>
          <Text style={{ fontSize: 15, textAlign: "justify", marginTop: 10 }}>
            {route.params.data.content}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{ color: "orange", fontSize: 12 }}
            onPress={() => Linking.openURL(route.params.data.url)}
          >
            Click Here to read full article
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginLeft: 5,
    backgroundColor: "#F0F4F4",
    height: 160,
    borderColor: "black",
    borderRadius: 1,
    width: "98%",
    padding: 20,
  },

  header: {
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    height: 40,
    borderRadius: 10,

    alignItems: "center",
    paddingHorizontal: 30,
  },
  button: {
    marginTop: 5,
    backgroundColor: "#F0F4F4",
    borderColor: "black",
    borderRadius: 1,
    height: 40,
    width: 320,
  },
  Text: {
    marginLeft: 20,
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
    color: "black",
  },
});

export default NewsSection;
