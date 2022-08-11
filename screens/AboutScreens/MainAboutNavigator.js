import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ChurchLocationAndMeetingsScreen from "./ChurchLocationAndMeetings";
import WhatWeBelieveScreen from "./WhatWeBelieve";
import WhyFormationChurchScreen from "./WhyFormationChurch";
import AboutHome from "./AboutHome";
import { createStackNavigator } from "@react-navigation/stack";

const screenOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#4F4D8C" },
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
              iconStyle={{ width: 24 }}
              color='white'
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
      />
      <Stack.Screen
        name="WhatWeBelieve"
        component={WhatWeBelieveScreen}
        options={({ navigation }) => ({
          title: "Our Beliefs",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
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
          title: "Formation Church",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
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
    color: "#4F4D8C",
  },
});

export default AboutScreen;
