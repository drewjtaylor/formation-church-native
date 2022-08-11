import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ChurchLocationAndMeetingsScreen from "./ChurchLocationAndMeetings";
import WhatWeBelieveScreen from "./WhatWeBelieve";
import WhyFormationChurchScreen from "./WhyFormationChurch";
import AboutHome from "./AboutHome";
import { createStackNavigator } from "@react-navigation/stack";

const screenOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#5264A3"},
};

const AboutScreen = () => {
  const Stack = createStackNavigator();
  return (
        <Stack.Navigator initialRouteName="AboutHome" screenOptions={screenOptions}>
          <Stack.Screen
            name="AboutHome"
            component={AboutHome}
            options={({ navigation }) => ({
              title: "About Formation Church",
              headerLeft: () => (
                <Icon
                  name="book"
                  type="font-awesome"
                  size={24}
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.navigate("AboutHome")}
                />
              ),
            })}
           />
          <Stack.Screen
            name="LocationInformation"
            component={ChurchLocationAndMeetingsScreen}
            options={({ navigation }) => ({
              title: "Location",
              headerLeft: () => (
                <Icon
                  name="map-o"
                  type="font-awesome"
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.navigate("AboutHome")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="WhatWeBelieve"
            component={WhatWeBelieveScreen}
            options={({ navigation }) => ({
              title: "Our Beliefs",
              headerLeft: () => (
                <Icon
                  name="scroll"
                  type="font-awesome-5"
                  color='white'
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.navigate("AboutHome")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="WhyFormationChurch"
            component={WhyFormationChurchScreen}
            options={({ navigation }) => ({
              title: "Why Formation Church?",
              headerLeft: () => (
                <Icon
                  name="head-question"
                  type="material-community"
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.navigate("AboutHome")}
                />
              ),
            })}
          />
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
    color: "white",
    marginLeft: 10
  },
});

export default AboutScreen;
