import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import DirectoryScreen from './screens/DirectoryScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./Directory/directorySlice";
import { fetchEvents } from "./Events/eventSlice";

// import { Platform } from 'react-native';
// import { Constants } from 'expo-constants';


const Tab = createBottomTabNavigator();

export default function Main() {
  const Stack = createStackNavigator();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchEvents())
    }, [dispatch])

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#4F4D8C" },
            tabBarIcon: () => (
              <Icon name="home" type="font-awesome" color={iconColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: "Events",
            tabBarLabelStyle: { color: "#4F4D8C" },
            tabBarIcon: () => (
              <Icon name="calendar" type="font-awesome" color={iconColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Directory"
          component={DirectoryScreen}
          options={{
            tabBarLabel: "Directory",
            tabBarLabelStyle: { color: "#4F4D8C" },
            tabBarIcon: () => (
              <Icon name="address-card" type="font-awesome" color={iconColor} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const iconColor = "#4F4D8C";

const screenOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#4F4D8C" },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
