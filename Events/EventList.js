import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import * as Animateable from "react-native-animatable";
import { FlatList } from "react-native-gesture-handler";
import { Text } from 'react-native';

const EventList = () => {
  const events = useSelector((state) => state.events);

    const sortedEvents = [...state.events.eventsArray.sort((a,b) => {
        const dateA = a.date;
        const dateB = b.date;
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
    })]
    console.log(`sortedEvents is: ${sortedEvents}`);

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
    eventDate = new Date(date);
    return (
      <Animateable.View animation="fadeIn" duration={1000} delay={500}>
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{eventDate.toLocaleTimeString('en-us')}</Card.Title>
          <Card.Divider />
          <Text>{description}</Text>
        </Card>
      </Animateable.View>
    );
  };

  return <FlatList
  data={events.eventsArray}
  renderItem={renderEventItem}
  keyExtractor={(item) => item.id.toString()}>

  </FlatList>


  return sortedEvents.map((event) => {
    const displayTime = event.date.toLocaleTimeString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    if (new Date() < event.date) {
      return (
        <Card key={event.id}>
          <CardBody>
            <CardTitle className="eventcardTitle bg-primary text-light display-6">
              {event.title}
            </CardTitle>
            <CardSubtitle className="eventcardSubtitle bg-primary text-light display-">
              {displayTime}
            </CardSubtitle>
            <CardText className="eventcardText bg-light">
              {event.description}
            </CardText>
          </CardBody>
        </Card>
      );
    }
  });
};

export default EventList;
