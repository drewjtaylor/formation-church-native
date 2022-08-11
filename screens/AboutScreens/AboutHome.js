import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";

const AboutHome = ({ navigation }) => {
  return (
    <View style={styles.mainTextBox}>
      <Text >
        Formation Church is a group of believers in the St. Petersburg area
        committed to being Christ-centered in what we do and community-focused
        in how we do it.
      </Text>
      <Button
        title="Location and meeting information"
        onPress={() => navigation.navigate("LocationInformation")}
        buttonStyle={styles.button}
        icon={
          <Icon
            name="map-o"
            type="font-awesome"
            color="white"
            iconStyle={{ marginRight: 10 }}
          />
        }
      />
      <Button
        title="Statement of Faith "
        onPress={() => navigation.navigate("WhatWeBelieve")}
        buttonStyle={styles.button}
        icon={
          <Icon
            name="scroll"
            type="font-awesome-5"
            color="white"
            iconStyle={{ marginRight: 10 }}
          />
        }
      />
      <Button
        title="Why Formation Church?"
        onPress={() => navigation.navigate("WhyFormationChurch")}
        buttonStyle={styles.button}
        icon={
          <Icon
            name="head-question"
            type="material-community"
            color="white"
            iconStyle={{ marginRight: 10 }}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  mainTextBox: {
    margin: 20,
    marginBottom: 50,
    
  }
});

export default AboutHome;
