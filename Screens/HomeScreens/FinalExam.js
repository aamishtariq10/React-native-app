import * as React from "react";

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
import Icon from "react-native-vector-icons/MaterialIcons";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/veg.png"),
    key: 1,
    food: "Vegetable",
    flag: true,
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/fruits.png"),
    key: 2,
    food: "Fruits",
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/meat.png"),
    key: 3,
    food: "Meat",
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/chi.png"),
    key: 4,
    food: "Chinese",
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/fast.png"),
    key: 5,
    food: "Fast Food",
    flag: true,
  },
];

const DATA2 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/discount.jpg"),
    key: 1,
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/dis2.jpg"),
    key: 2,
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/dis3.jpg"),
    key: 3,
    flag: true,
  },
];

const DATA3 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/f.jpg"),
    key: 1,
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/ff.jpg"),
    key: 2,
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/m.jpg"),
    key: 4,
    flag: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    src2: require("../../images/v.jpg"),
    key: 3,
    flag: true,
  },
];

function Section({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "mediumseagreen" }}>
      <View style={{ backgroundColor: "mediumseagreen", height: 160 }}>
        <View style={style.header}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Hey,
              </Text>
            </View>
            <Text style={{ marginTop: 3, fontSize: 15, color: "white" }}>
              Lets search your grocery food
            </Text>
          </View>
          <Image
            source={require("../../images/messi.jpeg")}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <View style={style.inputContainer}>
            <Icon
              name="search"
              size={20}
              style={{ color: "lightgrey", marginRight: 6 }}
            />
            <TextInput
              style={{ flex: 2, fontSize: 13 }}
              placeholder="Search for your daily grocery food"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#F0F4F4",
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          height: "100%",
        }}
      >
        <View
          style={{
            borderRadius: 1,
            //borderWidth: 1,
            margin: 10,
            borderRadius: 20,

            backgroundColor: "mintcream",
            height: 200,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
              >
                Categories
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 12, color: "mediumseagreen" }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={DATA}
            numColumns={1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ backgroundColor: "white", marginTop: 5 }}
                //   onPress={() => navigation.navigate("Section")}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    source={item.src2} /* Use item to set the image source */
                    key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                    style={{
                      width: 100,
                      height: 100,
                      margin: 10,

                      resizeMode: "contain",
                      // margin: 1,
                      // padding: 10,
                    }}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 12,
                      padding: 5,
                      marginLeft: 30,

                      textAlign: "justify",
                      //fontWeight: "bold",
                      alignContent: "center",
                    }}
                  >
                    {item.food}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <FlatList
            data={DATA2}
            numColumns={1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                <Image
                  source={item.src2} /* Use item to set the image source */
                  key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                  style={{
                    width: 200,
                    height: 100,
                    margin: 5,
                    borderRadius: 20,
                    // resizeMode: "contain",
                  }}
                ></Image>
              </TouchableOpacity>
            )}
          />
        </View>

        <View>
          <View
            style={{
              borderRadius: 1,

              borderRadius: 20,
              margin: 10,
              backgroundColor: "mintcream",
              height: 200,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  Popular Deals
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: "mediumseagreen" }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={DATA3}
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{ backgroundColor: "white", marginTop: 5 }}
                  //   onPress={() => navigation.navigate("Section")}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Image
                      source={item.src2} /* Use item to set the image source */
                      key={index} /* Important to set a key for list items,
                               but it's wrong to use indexes as keys, see below */
                      style={{
                        width: 120,
                        height: 120,
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 20,
                        //  resizeMode: "contain",
                        // margin: 1,
                        // padding: 10,
                      }}
                    ></Image>
                    <Text
                      style={{
                        fontSize: 12,
                        padding: 5,
                        marginLeft: 30,

                        textAlign: "justify",
                        //fontWeight: "bold",
                        alignContent: "center",
                      }}
                    >
                      {item.food}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Section;

const style = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
