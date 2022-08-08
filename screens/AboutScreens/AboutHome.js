import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const AboutHome = ({navigation}) => {
  return (
    <View>
      <Text>AboutHome</Text>
      <Button title="Press here to go to location page" onPress={() => navigation.navigate('LocationInformation')} />
    </View>
  );
};

export default AboutHome;
