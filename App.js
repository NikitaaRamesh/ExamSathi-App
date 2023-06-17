import * as React from "react";
import { StyleSheet, View, TouchableHighlight, Button } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavigationTabs from "./components/NavigationTabs";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Emptypage from "./components/Emptypage";

import Icon1 from "./assets/PDF bhandar.svg";
import Icon2 from "./assets/doubts group.svg";
import Icon3 from "./assets/bharti charcha.svg";
import Icon4 from "./assets/revision.svg";
import Profile from "./assets/profile.svg";
// import Icon5 from './assets/motivation.svg';

//Constants
const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BTab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  roundshape: {
    backgroundColor: "lightblue",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

//Constants

//Functions
function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFF0",
        tabBarStyle: {
          backgroundColor: "transparent",
        },
        // tabBarBackground: () => {
        //   <View style={{ flex: 1 }}>
        //   <LinearGradient colors={["purple", "blue"]} style={{ flex: 1 }}></LinearGradient></View>
        // },
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 11,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "grey",
          borderBottomWidth: 3,
        },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            FirstPage: "FirstPage",
            SecondPage: "SecondPage",
            ThirdPage: "ThirdPage",
            FourthPage: "FourthPage",
            FifthPage: "FifthPage",
          };
          if (icons[route.name] == "FirstPage") {
            return (
              <View style={styles.container}>
                <TouchableHighlight style={styles.roundshape}>
                  <Icon1 width={20} height={20} />
                </TouchableHighlight>
              </View>
            );
          } else if (icons[route.name] == "SecondPage") {
            return (
              <View style={styles.container}>
                <TouchableHighlight style={styles.roundshape}>
                  <Icon2 width={20} height={20} />
                </TouchableHighlight>
              </View>
            );
          } else if (icons[route.name] == "ThirdPage") {
            return (
              <View style={styles.container}>
                <TouchableHighlight style={styles.roundshape}>
                  <Icon3 width={20} height={20} />
                </TouchableHighlight>
              </View>
            );
          } else if (icons[route.name] == "FourthPage") {
            return (
              <View style={styles.container}>
                <TouchableHighlight style={styles.roundshape}>
                  <Icon4 width={20} height={20} />
                </TouchableHighlight>
              </View>
            );
          } else {
            return (
              <View style={styles.container}>
                <TouchableHighlight style={styles.roundshape}>
                  <Icon4 width={20} height={20} />
                </TouchableHighlight>
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: "Second",
        }}
      />
      <Tab.Screen
        name="ThirdPage"
        component={SecondPage}
        options={{
          tabBarLabel: "Third",
        }}
      />
      <Tab.Screen
        name="FourthPage"
        component={SecondPage}
        options={{
          tabBarLabel: "Fourth",
        }}
      />
      <Tab.Screen
        name="FifthPage"
        component={SecondPage}
        options={{
          tabBarLabel: "Fifth",
        }}
      />
    </Tab.Navigator>
  );
}

function Gradient() {
  return (
    <LinearGradient
      colors={["purple", "blue"]}
      style={{ flex: 1 }}
    ></LinearGradient>
  );
}

function CommunityRoute() {
  return <Text>Albums</Text>;
}
//Functions

const TestsRoute = () => <Text>Recents</Text>;

const App = () => {
  const visibility = NavigationBar.useVisibility();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "albums", title: "Community", icon: "account-group", color: "blue" },
    { key: "tests", title: "Tests", icon: "notebook-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    albums: CommunityRoute,
    recents: TestsRoute,
  });

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer theme={mainTheme}>
          <LinearGradient colors={["purple", "blue"]} style={{ flex: 1 }}>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTintColor: "white",
                headerTitleStyle: { fontWeight: "bold" },
                headerShadowVisible: false,
                // headerBackground : () => (
                //   <LinearGradient colors={["purple", "blue"]} style={{ flex: 1 }} />
                // )
              }}
            >
              <Stack.Screen
                name="TabStack"
                component={TabStack}
                options={{
                  title: "ExamSathi",
                  headerRight: () => (
                    <View
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Profile width={20} height={20} />
                    </View>
                  ),
                }}
              />
            </Stack.Navigator>
          </LinearGradient>
        </NavigationContainer>
        <NavigationContainer>
          <BTab.Navigator>
            <BTab.Screen name="Home" component={Emptypage} options={{tabBarShowLabel: "false"}}/>
            <BTab.Screen name="Settings" component={Emptypage} />
          </BTab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
