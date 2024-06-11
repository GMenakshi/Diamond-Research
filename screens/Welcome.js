import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import CheckBox from "react-native-check-box";
//import { Icon } from "react-native-vector-icons/MaterialCommunityIconss";
// import validator from "validator";

const Welcome = ({ navigation }) => {
  const [email, setEmail] = React.useState(null);
  const [Password, setpassword] = React.useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handlePress = () => {
    Linking.openURL("https://diamondresearch.co.in/registration").catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const handlePress1 = () => {
    Linking.openURL("https://diamondresearch.co.in/forgot-password").catch(
      (err) => console.error("An error occurred", err)
    );
  };

  const handleCheckEmail = (text, input) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
    // setEmail(input);
    // if (!input) {
    //   setError("Email is required.");
    //   return;
    // }
    // if (validator.isEmail(input)) {
    //   setError("");
    // } else {
    //   setError("Please enter a valid email address.");
    // }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainUppercase = /^(?=,*[A-Z]).*$/;
    if (!isContainUppercase.test(value)) {
      return "Password must have at least one Uppercase Character,";
    }

    // const isContainsLowerCase = /^(?=,*[a-z]).*$/;
    // if (!isContainsLowerCase.test(value)) {
    //   return "Password must have at least one Lowercase Character";
    // }

    // const isContainsNumber = /^(?=,*[0-9]).*$/;
    // if (!isContainsNumber.test(value)) {
    //   return "Password must have at least one Digit";
    // }

    // const isValidLength = /^.{8,16}$/;
    // if (!isValidLength.test(value)) {
    //   return "Password must be 8-16 Characters Long.";
    // }

    //
    return null;
    //
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(Password);
    if (!checkPassword) {
      navigation.navigate("Dashboard", { name: "Dashboard" });
    } else {
      alert(checkPassword);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/loginpage.png")} />
        <Image
          source={require("../assets/rec.png")}
          style={{
            height: 350,
            width: 350,
            borderRadius: 20,
            position: "absolute",
            top: "35%",
            left: "11%",
            shadowRadius: 5,
            shadowOpacity: 500,
            shadowColor: "#000000",
          }}
        />
        <StatusBar style="auto" />
        <View style={styles.text1}>
          <Text
            style={{
              color: "#43FFF7",
              fontSize: 25,
              top: 80,
              left: 25,
              fontWeight: "bold",
            }}
          >
            Let's Get Started
          </Text>
        </View>
        <View style={styles.text2}>
          <Text style={{ color: "#C8C8C8", fontSize: 13 }}>
            Sign in to continue to Diamondresearch
          </Text>
        </View>
        <View style={styles.text4}>
          <Text style={{ color: "#C8C8C8", fontSize: 12.5 }}>
            Don’t have an account?
          </Text>
        </View>
        <SafeAreaView style={styles.text3}>
          <TextInput
            style={{ color: "white" }}
            placeholder="Enter email"
            placeholderTextColor={"#C8C8C8"}
            onChangeText={(text) => handleCheckEmail(text)}
            value={email}
          />
          {checkValidEmail ? (
            <Text style={{ color: "pink", top: 20 }}>Enter a valid email</Text>
          ) : (
            <Text></Text>
          )}
          <TextInput
            style={{
              top: "70%",
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: 300,
              right: "8%",
              borderRadius: 8,
              borderColor: "#C8C8C8",
              color: "white",
            }}
            onChangeText={(text) => setpassword(text)}
            placeholder="Enter Password"
            placeholderTextColor={"#C8C8C8"}
            secureTextEntry={true}
            value={Password}
          />
        </SafeAreaView>
        <View style={styles.button}>
          {email == "" || Password == "" || checkValidEmail == false ? (
            <Button
              disabled
              title="SIGN IN"
              onPress={handleLogin}
              color={"#018782"}
            />
          ) : (
            <Button title="SIGN IN" onPress={handleLogin} color={"#018782"} />
          )}
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            top: "64%",
            left: "62%",
          }}
          onPress={handlePress1}
        >
          <Text style={{ color: "#00C6BE", bottom: 10 }}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            top: "70.9%",
            left: "50%",
          }}
          onPress={handlePress}
        >
          <Text style={{ color: "#00C6BE", fontSize: 15 }}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={{
            // width: 300,
            top: "60%",
            left: "20%",
            position: "absolute",
            height: 40,
            margin: 12,
            padding: 10,
            borderRadius: 8,
            color: "#C8C8C8",
          }}
        >
          Remember me?
        </Text>
        <CheckBox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          checkBoxColor="#C8C8C8"
          //rightText="Remember me?"
          rightTextStyle={{ color: "#C8C8C8" }}
          style={{
            // width: 300,
            top: "60%",
            left: "12%",
            position: "absolute",
            height: 40,
            margin: 12,
            padding: 10,
            borderRadius: 8,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    bottom: -85,
    height: 2000,
  },
  button: {
    bottom: "29.3%",
    flex: 1,
    width: 300,
    left: "17%",
    textAlign: "center",
    position: "absolute",
    color: "#46BC5C",
  },
  text1: {
    flex: 1,
    textAlign: "center",
    width: 1000,
    top: "27%",
    left: "24%",
    position: "absolute",
    color: "#46BC5C",
  },
  text2: {
    flex: 1,
    textAlign: "center",
    bottom: "57%",
    position: "absolute",
    left: "24%",
  },
  text3: {
    flex: 1,
    textAlign: "center",
    borderColor: "#C8C8C8",
    width: 300,
    top: "44%",
    left: "14%",
    position: "absolute",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 8,
  },
  text4: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    top: "71.3%",
    left: "17%",
  },
  checkbox: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    top: "71%",
    left: "17%",
  },
});

export default Welcome;
