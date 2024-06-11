// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Market from "./Market";
import Funds from "./Funds";
import Home from "./Home";
import bar from "../assets/bar.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const ProNav = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Profile">
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const Dashboard = () => {
  return (
    <>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          drawerStyle: {
            backgroundColor: "#488F8D",
          },
          headerStyle: {
            backgroundColor: "#43FFF7",
          },
        }}
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View>
                <Image
                  source={bar}
                  style={{
                    height: 50,
                    width: 280,
                  }}
                />
                <Image
                  source={require("../assets/ui1.png")}
                  style={{
                    top: 450,
                    width: 250,
                    height: 250,
                    left: 15.5,
                    flex: 1,
                    position: "absolute",
                    color: "#46BC5C",
                  }}
                />
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabelStyle: {
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            },
            drawerIcon: () => (
              <MaterialIcons name="home" size={23} color="#ffffff" />
            ),
            headerTransparent: true,
            headerTitle: " ",
            headerTintColor: "#00FF47",
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Market"
          options={{
            drawerLabelStyle: {
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            },
            drawerIcon: () => (
              <MaterialIcons name="corporate-fare" size={23} color="#ffffff" />
            ),
            headerTransparent: true,
            headerTitle: " ",
            headerTintColor: "#00FF47",
          }}
          component={Market}
        />
        <Drawer.Screen
          name="Funds"
          options={{
            drawerLabelStyle: {
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            },
            drawerIcon: () => (
              <MaterialIcons name="paid" size={23} color="#ffffff" />
            ),
            headerTransparent: true,
            headerTitle: " ",
            headerTintColor: "#00FF47",
          }}
          component={Funds}
        />
      </Drawer.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: -24,
  },
});

export default Dashboard;
