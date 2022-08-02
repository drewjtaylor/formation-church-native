import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button } from "react-native-elements";
import EventList from "../Events/EventList";

const EventsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Welcome to the upcoming Events page.</Text>
      <Button
        title="Add an Event"
        containerStyle={{ borderRadius: 0, borderWidth: 0 }}
        onPress={() => {
          console.log(`You just pushed a button that doesn't do anything yet`);
        }}
      />
      <Text>
        If there are any upcoming events, or cancelled church gatherings, you
        can find that information here.
      </Text>
      <EventList />

      <Button
        title="Back to home page"
        onPress={() => navigation.navigate("Home")}
      />
      <FlatList></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default EventsScreen;
