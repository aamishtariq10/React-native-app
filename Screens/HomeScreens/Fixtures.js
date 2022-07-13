import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import Section from "./Section";
import { AuthErrorCodes } from "firebase/auth";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "12-12-2021",
    src: require("../../images/fcb.png"),
    time: "12:45 am",
    src2: require("../../images/rm.jpg"),
    key: 1,
    team1: "Fc Barcelona",
    team2: "Real Madrid",
    flag: true,
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "12-12-2021",
    src: require("../../images/bayern.png"),
    time: "12:45 am",
    src2: require("../../images/dort.png"),
    key: 4,
    team1: "Fc Bayern",

    team2: "Dortmund",
    flag: true,
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/spurs.png"),
    src: require("../../images/atm.jpg"),
    title: "12-12-2021",
    time: "12:45 am",
    key: 5,
    team1: "Atletico Madrid",

    team2: "Spurs",
    flag: true,
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src: require("../../images/mcity.png"),
    src2: require("../../images/munited.png"),
    title: "12-12-2021",
    time: "1:00 am",
    key: 6,
    team1: "Manchester United",
    team2: "Manchecter City",
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "12-12-2021",
    src: require("../../images/psg.png"),
    time: "12:45 am",
    src2: require("../../images/liverpool.png"),
    key: 2,
    team1: "Psg",

    team2: "Liverpool",
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "12-12-2021",
    src: require("../../images/acmilan.png"),
    time: "12:45 am",
    src2: require("../../images/inter.png"),
    key: 3,
    team1: "AC Milan",

    team2: "Inter Milan",
    flag: true,
  },
];

function Home1({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={DATA}
          numColumns={1}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ backgroundColor: "white", marginTop: 5 }}
            >
              <View
                style={{ borderBottomWidth: 0.9, borderBottomColor: "grey" }}
              >
                <Text style={{ fontSize: 15, padding: 5, color: "grey" }}>
                  {item.title} {item.time}
                </Text>
              </View>

              <View style={styles.list}>
                {/* <View style={{ justifyContent: "center"  , }}>
                  <Text>{item.mathch}</Text>
                </View> */}

                <View>
                  <Image
                    source={item.src} /* Use item to set the image source */
                    key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                    style={{
                      width: 10,
                      height: 10,
                      borderWidth: 1,
                      borderColor: "white",
                      resizeMode: "contain",
                      justifyContent: "center",
                      // alignContent: " center",
                      marginTop: 10,
                      marginRight: 10,
                      padding: 20,
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 15,
                      marginTop: 15,
                      textAlign: "justify",
                      fontWeight: "bold",
                      marginRight: 30,
                    }}
                  >
                    {item.team1}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: "justify",
                      fontWeight: "bold",
                      marginTop: 30,
                    }}
                  >
                    vs
                  </Text>
                </View>
                <View
                //style={{ justifyContent: "flex-" }}
                >
                  <Image
                    source={item.src2} /* Use item to set the image source */
                    key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                    style={{
                      width: 40,
                      height: 40,
                      borderWidth: 1,
                      borderColor: "white",
                      resizeMode: "center",
                      //justifyContent: "center",
                      // alignContent: " center",
                      marginTop: 10,
                      marginLeft: 30,
                      padding: 20,
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 15,
                      margin: 15,

                      textAlign: "justify",
                      fontWeight: "bold",
                      marginLeft: 30,
                    }}
                  >
                    {item.team2}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 2,
    //backgroundColor: "black",
    width: "95%", //width of screen
  },
  list: {
    //justifyContent: "center",
    justifyContent: "space-between",
    width: 150,
    marginLeft: 50,
    marginTop: 35,
    marginBottom: 35,
    //backgroundColor: "white",
    //borderWidth: 1,
    flexDirection: "row",
    height: 80,
  },
  text1: {},
});

//const Stack2  = createNativeStackNavigator();

// function Home1() {
//     return (

//         <Stack2.Navigator  screenOptions={{headerShown: false}}
//         >
//          <Stack2.Screen name="Fixtures"  component={Home1 } />
//           <Stack2.Screen name="Match Today" component={Section} />

//         </Stack2.Navigator>

//     );
//   }

export default Home1;
