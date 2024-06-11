import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { categories } from "../constants/Stock";

const Market = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../assets/bg.png")} />
      </View>
      <View>
        <Text style={styles.title}>Stock Market</Text>
      </View>
      <ScrollView>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor: "#003E3D",
                marginRight: 20,
                borderRadius: 10,
                paddingVertical: 50,
                shadowColor: "#000",
                left: 10,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
                top: 180,
              }}
            >
              <Text> {category.category} </Text>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.profile}>
        <Image source={require("../assets/user.png")} />
      </TouchableOpacity>
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

export default Market;
