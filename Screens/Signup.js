import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Config";
import { SocialIcon } from "react-native-elements";
function Signup({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //const [username, setUsername] = React.useState('');
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      navigation.navigate("Home");
    } catch {
      Alert.alert("Alert", "Enter Valid Email or Password", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log("not created");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./HomeScreens/LoginImage.png")}
      />

      <View>
        <Text style={styles.text}>Hey, please fill the form</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#000000"
          //onChangeText={username => setUsername(username)}
          //   value={username}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <Text>----------- Or SignUp With ------------</Text>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <SocialIcon
          backgroundColor="blue"
          type="facebook"
          onPress={() => navigation.navigate("Home")}
        />
        <SocialIcon
          backgroundColor="blue"
          type="google"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "black",
    marginBottom: 10,
  },

  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
  },
  inputView: {
    width: "80%",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fb8a5a",
    height: 45,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#000000",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginBottom: 5,
  },
  loginText: {
    color: "white",
  },
});
