import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SectionList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack1 = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// End App.js

export default function q1() {
  return (
    <Stack1.Navigator
      initialRouteName="tasanif"
      screenOptions={{ headerShown: true }}
    >
      <Stack1.Screen name="tasanif" component={books} />

      <Stack1.Screen name="section" component={section} />
    </Stack1.Navigator>
  );
  function books({ navigation }) {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Arindka",
        key: 4,
        lastname: "Last Name",
        flag: true,
        data: [
          { key: 0, title: "Deebacha" },
          { key: 1, title: "chapter" },
        ],
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Arindka Taruf",
        key: 5,
        lastname: "Last Name",
        data: [
          { key: 0, title: "Mukhtalif Nam" },
          { key: 1, title: "Tree" },
        ],
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Arind Kay Murakabad",
        key: 6,
        lastname: "Last Name",
        data: [{ key: 0, title: "Arind Kay mu" }],
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Arind Kay Ilaqe",
        key: 6,
        lastname: "Last Name",
        data: [
          { key: 0, title: "Arind Kay Ilaqa" },
          { key: 1, title: "ilaqa jat" },
        ],
      },
    ];

    const DATA1 = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Andarain",
        key: 4,
        lastname: "Last Name",
        flag: true,
        data: [
          { key: 0, title: "Andarain Deebacha" },
          { key: 1, title: "chapter Andarain" },
        ],
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Andarain Taruf",
        key: 5,
        lastname: "Last Name",
        data: [
          { key: 0, title: "Andarain Mukhtalif Nam" },
          { key: 1, title: "Andarain Tree" },
        ],
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Andarain Kay Murakabad",
        key: 6,
        lastname: "Last Name",
        data: [{ key: 0, title: "Andarain Kay mu" }],
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Andarain Kay Ilaqe",
        key: 6,
        lastname: "Last Name",
        data: [
          { key: 0, title: "Andarain Kay Ilaqa" },
          { key: 1, title: "Andarain jat" },
        ],
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 2, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("section", { data: DATA1 })}
            >
              <Image
                style={{ width: 150, height: 200 }}
                source={require("../../images/book1.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("section", { data: DATA })}
            >
              <Image
                style={{ width: 150, height: 190 }}
                source={require("../../images/book2.jpg")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 4, backgroundColor: "pink" }}></View>
      </View>
    );
  }
}

function section({ navigation, route }) {
  const [text, settext] = React.useState();
  const [banners, setbanners] = React.useState([]);
  const [ps, setproduct] = React.useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setproduct(route.params.data);
    setbanners(route.params.data);
  };
  const searchUser = (text) => {
    setbanners(
      ps.filter((i) => i.title.toLowerCase().includes(text.toLowerCase()))
    );
  };
  return (
    <View>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <View>
          <TextInput
            style={{ width: 200, height: 40, backgroundColor: "white" }}
            onChangeText={(text) => searchUser(text)}
            value={text}
            placeholder="useless placeholder"
          />
        </View>
      </View>
      <View>
        <SectionList
          sections={banners}
          renderSectionHeader={({ section }) => (
            <View
              style={{
                backgroundColor: "green",
                padding: 5,
                marginBottom: 5,
                height: 40,
              }}
            >
              <Text> {section.title} </Text>
            </View>
          )}
          renderItem={({ item, section }) => (
            <View
              style={{
                backgroundColor: "grey",
                padding: 5,
                marginBottom: 5,
                height: 40,
              }}
            >
              <Text> {item.title} </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
