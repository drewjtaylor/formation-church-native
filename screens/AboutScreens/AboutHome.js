import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const AboutHome = ({navigation}) => {
  return (
    <View>
      <Text>AboutHome</Text>
      <Button title="Press here to go to location page" onPress={() => navigation.navigate('LocationInformation')} />
      <Button title="Press here to go to our statement of faith" onPress={() => navigation.navigate('WhatWeBelieve')} />
      <Button title="Press here to see why we're named Formation Church" onPress={() => navigation.navigate('WhyFormationChurch')} />

    </View>
  );
};

export default AboutHome;
