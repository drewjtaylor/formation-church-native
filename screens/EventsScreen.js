import { useDispatch } from "react-redux";
import { useState } from "react";
import { Text, StyleSheet, StatusBar, Modal } from "react-native";
import { Button } from "react-native-elements";
import * as Animateable from "react-native-animatable";
import { createEvent } from "../Events/eventSlice";
import EventList from "../Events/EventList";
import AddEventModal from "../Events/AddEventModal";

const EventsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  // addNewEvent requires parameters: (title: string, eventId: int, date: string or date object, description: string)
  const addNewEvent = () =>
    dispatch(
      createEvent({
        eventId: 555,
        title: "test title",
        date: new Date(),
        description: "New description",
      })
    );

  return (
    <>
      <Text style={styles.mainTitle}>Check out our upcoming events</Text>
      <Animateable.View animation="rubberBand" delay={1500}>
        <Button
          title="Add an Event"
          containerStyle={{ borderRadius: 0, borderWidth: 0 }}
          onPress={() => {
            console.log(`Button pressed...`);
            toggleModal();
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
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <AddEventModal setShowModal={setShowModal} />
        <Button
          onPress={toggleModal}
          title="Cancel"
          color="red"
          accessibilityLabel="Tap here to go back"
        />
      </Modal>
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
