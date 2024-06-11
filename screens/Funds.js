import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const Funds = () => {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  return (
    <View>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 0,
    backgroundColor: "#488F8D",
  },
  // profile: {
  //   flex: 1,
  //   textAlign: "center",
  //   width: 30,
  //   position: "absolute",
  //   top: 35,
  //   left: 330,
  // },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 50,
    backgroundColor: "pink",
    fontSize: 20,
  },
});

export default Funds;
