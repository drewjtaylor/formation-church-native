import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import * as Animateable from "react-native-animatable";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import formatDateTime from "../util/formatDateTime";

const EventList = () => {
  const events = useSelector((state) => state.events);

  // Creates a copy of eventsArray and sorts it for use in the list
  const sortedEvents = [...events.eventsArray];
  sortedEvents.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  if (events.isLoading) {
    return <Loading />;
  }

  if (events.errMess) {
    return (
      <View>
        <Text>{events.errMess}</Text>
      </View>
    );
  }

  const renderEventItem = ({ item: event }) => {
    const { date, title, description } = event;
    const eventDate = new Date(date);
    return (
      <Animateable.View animation="fadeIn" duration={1000} delay={500}>
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Title>
            {eventDate.toLocaleDateString()} at {formatDateTime(eventDate)}
          </Card.Title>
          <Card.Divider />
          <Text>{description}</Text>
        </Card>
      </Animateable.View>
    );
  };

  return (
    <FlatList
      data={sortedEvents}
      renderItem={renderEventItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default EventList;
