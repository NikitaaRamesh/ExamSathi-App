import * as React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import NavigationTabs from "./components/NavigationTabs";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 10
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'grey',
          borderBottomWidth: 3,
        },
        tabBarIcon: ({ color, size}) =>{
          const icons = {
            FirstPage : 'home',
            SecondPage : 'account',
            ThirdPage : 'microphone',
            FourthPage : 'help',
            FifthPage : 'account',
          };
          return (
            <MaterialCommunityIcons name = {icons[route.name]} color = {color} size = {size} />
          );
        },
      })}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'Home',
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Second',
        }} />
        <Tab.Screen
        name="ThirdPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Third',
        }} />
        <Tab.Screen
        name="FourthPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Fourth',
        }} />
        <Tab.Screen
        name="FifthPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Fifth',
        }} />
    </Tab.Navigator>
  );
}

function CommunityRoute() {
  return <Text>Albums</Text>;
}

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#e6b364' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: 'ExamSathi' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
      <View style={styles.container}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />

      </View>
    </SafeAreaProvider>
  </>
  );
};

export default App;
