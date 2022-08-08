import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import ChurchLocationAndMeetingsScreen from "./ChurchLocationAndMeetings";
import WhatWeBelieveScreen from "./WhatWeBelieve";
import WhyFormationChurchScreen from "./WhyFormationChurch";
import AboutHome from "./AboutHome";
import {createStackNavigator} from '@react-navigation/stack'

const screenOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#4F4D8C" },
};

const LocationAndMeetingsNavigator = () => {
  
};

const AboutScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="AboutHome" screenOptions={screenOptions}>
        <Stack.Screen
          name="AboutHome"
          component={AboutHome}
          options={({ navigation }) => ({
            title: "Location",
            headerLeft: () => (
              <Icon
                name="book"
                type="font-awesome"
                iconStyle={styles.stackIcon}
                onPress={() => navigation.navigate("AboutHome")}
              />
            ),
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="LocationInformation"
          component={ChurchLocationAndMeetingsScreen}
          options={({ navigation }) => ({
            title: "Location",
            headerLeft: () => (
              <Icon
                name="home"
                type="font-awesome"
                iconStyle={styles.stackIcon}
                onPress={() => navigation.navigate("AboutHome")}
              />
            ),
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  stackIcon: {
    color: "#4F4D8C",
  },
});

export default AboutScreen;
