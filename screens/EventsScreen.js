import {
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Button } from "react-native-elements";
import EventList from "../Events/EventList";
import * as Animateable from "react-native-animatable";
import { createEvent } from "../Events/eventSlice";
import { useDispatch } from "react-redux";

const EventsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    // addNewEvent requires parameters: (title: string, eventId: int, date: string or date object, description: string)
    const addNewEvent = () => dispatch(createEvent({eventId: 555, title: 'test title', date: new Date(), description: 'New description'}));

    return (
    <>
      <Text style={styles.mainTitle}>Check out our upcoming events</Text>
      <Animateable.View animation='rubberBand' delay={1500}>
        <Button
            title="Add an Event"
            containerStyle={{ borderRadius: 0, borderWidth: 0 }}
            onPress={() => {
            console.log(`Button pressed...`);
            addNewEvent();
            }}
        />
      </Animateable.View>
      <Text>
        If there are any upcoming events, or cancelled church gatherings, you
        can find that information here.
      </Text>
      <EventList />

      <Button
        title="Back to home page"
        onPress={() => navigation.navigate("Home")}
      />
    </>
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
