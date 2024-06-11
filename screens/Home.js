// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { categories, colors } from "../constants/Stock";
// import { Ionicons } from "@expo/vector-icons";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Home = ({ navigation }) => {
  //   const [people, setPeople] = useState([
  //     { name: "shaun", id: "1" },
  //     { name: "yoshi", id: "2" },
  //     { name: "mario", id: "3" },
  //     { name: "luigi", id: "4" },
  //     { name: "peach", id: "5" },
  //     { name: "toad", id: "6" },
  //     { name: "bowser", id: "7" },
  //   ]);

  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../assets/bg.png")} />
      </View>
      {/* <View>
        <Image style={styles.rec1} source={require("../assets/rec1.png")} />
      </View> */}
      <View>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>

      <View>
        <Text style={styles.title2}>Investment Growth</Text>
      </View>

      {/* <View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 145,
            left: 65,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Portfolio
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 166,
            left: 65,
            color: "white",
            fontSize: 13,
          }}
        >
          11169.35
        </Text>
        <Image
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 145,
            left: 25,
            color: "white",
            width: 30,
            height: 30,
            fontWeight: "bold",
          }}
          source={require("../assets/icon1.png")}
        />
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 145,
            left: 220,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Your Investment
        </Text>
        <Image
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 150,
            left: 185,
            color: "white",
            fontSize: 16,
            width: 30,
            height: 30,
            fontWeight: "bold",
          }}
          source={require("../assets/icon4.png")}
        />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 166,
            left: 222,
            color: "white",
            fontSize: 13,
          }}
        >
          8000 INR
        </Text>
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 220,
            left: 65,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Current value
        </Text>
        <Image
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 220,
            left: 25,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            width: 30,
            height: 30,
          }}
          source={require("../assets/icon2.png")}
        />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 240,
            left: 65,
            color: "white",
            fontSize: 13,
          }}
        >
          8401.9 INR
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 240,
            left: 222,
            color: "white",
            fontSize: 13,
          }}
        >
          Demo Diamond
        </Text>
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 220,
            left: 222,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Plan name
        </Text>
        <Image
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 220,
            left: 185,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            width: 30,
            height: 30,
          }}
          source={require("../assets/icon5.png")}
        />
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 290,
            left: 65,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          ROI
        </Text>
        <Image
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 290,
            left: 25,
            color: "white",
            width: 30,
            height: 30,
          }}
          source={require("../assets/icon3.png")}
        />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            position: "absolute",
            top: 310,
            left: 65,
            color: "white",
            fontSize: 13,
          }}
        >
          5%
        </Text>
      </View> */}
      <TouchableOpacity
        style={styles.profile}
        onPress={navigation.navigate("Profile", { name: "Profile" })}
      >
        <Image source={require("../assets/user.png")} />
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 16,
                borderRadius: 18,
                marginLeft: 20,
                paddingHorizontal: 60,
                paddingVertical: 50,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 150,
                // top: 120,
              }}
            >
              <Text
                style={{
                  color: index === 0 && colors.COLOR_LIGHT,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View>
        {/* <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        /> */}
      </View>
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
    top: 75,
    left: 15,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  title2: {
    flex: 1,
    textAlign: "center",
    position: "absolute",
    top: 325,
    left: 15,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  rec1: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    width: 370,
    top: 130,
    height: 230,
    borderRadius: 20,
  },
  item: {
    flex: 1,
    top: 200,
    marginHorizontal: 5,
    marginTop: 190,
    padding: 30,
    fontSize: 100,
    color: "white",
  },
  container1: {
    flex: 1,
    paddingTop: 300,
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    top: 450,
    width: 400,
  },
});

export default Home;
