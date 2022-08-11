import { View, Text, Dimensions } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { Card } from "react-native-elements";

const ChurchLocationAndMeetingsScreen = () => {

    const churchLatitude = 27.8276673;
    const churchLongitude = -82.7230568;

  return (
    <View style={{margin: 10}}>
      <Text>While we do not yet have our own building, Grace Brethren Church of Pinellas Park kindly lets us use their building every other Sunday at 7:00 PM</Text>
      <MapView 
      style={{
    width: Dimensions.get('window').width-40,
    marginLeft: 20,
    marginTop: 50,
    height: 300,
  }}
    initialRegion={{
      latitude: churchLatitude,
      longitude: churchLongitude,
      latitudeDelta: 0.0822,
      longitudeDelta: 0.0401,
    }}
  >
    <Marker coordinate={{latitude: churchLatitude, longitude: churchLongitude}}/>
  </MapView>
    <Card>
        <Card.Title>Church Meetings:</Card.Title>
        <Card.Divider />
        <Text>Every 1st and 3rd Sunday: 7:00 PM</Text>
    </Card>
    
    </View>
  );
};

export default ChurchLocationAndMeetingsScreen;
