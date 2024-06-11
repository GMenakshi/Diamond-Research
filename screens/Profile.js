import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: -400,
  },
  profile: {
    flex: 1,
    textAlign: "center",
    width: 30,
    position: "absolute",
    top: 35,
    left: 330,
  },
  title: {
    flex: 1,
    textAlign: "center",
    position: "absolute",
    top: 90,
    left: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Profile;
