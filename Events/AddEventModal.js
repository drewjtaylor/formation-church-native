import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createEvent } from "./eventSlice";

const AddEventModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    console.log(JSON.stringify(selectedDate))
    const currentDate = selectedDate || eventDate;
    setShowCalendar(Platform.OS === "ios");
    setEventDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    console.log(JSON.stringify(selectedTime));
    const currentTime = selectedTime || eventTime;
    setShowTimePicker(Platform.OS === "ios");
    setEventTime(currentTime);
  };
  
  const eventsList = useSelector((state) => state.events);
    const dispatch = useDispatch();
    const handleNewEvent = () => {
    console.log(eventsList.eventsArray);
    dispatch(createEvent({title: title, eventId: eventsList.length+1, date: eventDate, description: description}));
    console.log(`The title is: ${title}`);
    console.log(`The description is: ${description}`);
    console.log(`The date is: ${eventDate}`);
    console.log(`The event time is: ${eventTime}`);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEventDate(new Date());
    setEventTime(new Date());
  };

  return (
    <>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Title of Event:</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          value={description}
        />
      </View>

      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Date:</Text>
        <Button
          onPress={() => setShowCalendar(!showCalendar)}
          title={eventDate.toLocaleDateString("en-US")}
          color="blue"
          accessibilityLabel="Tap me to select an event date"
        />
      </View>

      {showCalendar && (
        <DateTimePicker
          style={styles.formItem}
          value={eventDate}
          mode="date"
          display="default"
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}

      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Time:</Text>
        <Button
          onPress={() => setShowTimePicker(!showTimePicker)}
          title={eventTime.toLocaleTimeString("en-US").slice(0, eventTime.toLocaleTimeString("en-US").length-3)}
          color="blue"
          accessibilityLabel="Tap me to select an event time"
        />
      </View>

      {showTimePicker && (
        <DateTimePicker
          style={styles.formItem}
          value={eventTime}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      <View style={styles.formRow}>
        <Button
          onPress={() => handleNewEvent()}
          title="Submit new event"
          color="red"
          accessibilityLabel="Tap here to submit your event"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: { fontSize: 18, flex: 2 },
  formItem: { flex: 1 },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 3,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "green",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default AddEventModal;
