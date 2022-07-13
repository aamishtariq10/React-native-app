import * as React from "react";
import { auth } from "./Config";
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SocialIcon } from "react-native-elements";
import { Icon } from "react-native-elements";

function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
      console.log(user);
    } catch {
      Alert.alert("Sign Up", "User Not found", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./HomeScreens/LoginImage.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#000000"
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("q1")}
      >
        <Text style={styles.loginText}>q1</Text>
      </TouchableOpacity>
      <Text>----------- Or Login with -----------</Text>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <SocialIcon
          // backgroundColor="blue"
          type="facebook"
          onPress={() => navigation.navigate("Home")}
        />
        <SocialIcon
          //backgroundColor="blue"
          type="google"
          onPress={() => navigation.navigate("FINAL")}
        />
      </View>

      <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ fontWeight: "bold" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginTop: 10,
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fb8a5a",
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
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
