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
} from "react-native";
import { Button } from "react-native-web";

const Home3 = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../images/messi.jpeg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100 / 2,
              alignSelf: "center",
            }}
          />
          <View style={{ margin: 20, alignSelf: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Aamish Tariq
              </Text>
            </View>
            <TouchableOpacity
            // onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  marginTop: 3,
                  fontSize: 15,
                  color: "orange",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Edit Porfile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Terms and Contitions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            padding: 10,
            fontWeight: "bold",
            color: "orange",
            justifyContent: "flex-end",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F4",
    height: 160,
    borderColor: "black",
    borderRadius: 1,
    width: 320,
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

export default Home3;
