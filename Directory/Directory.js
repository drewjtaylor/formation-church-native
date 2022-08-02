import { Text, StyleSheet, FlatList } from "react-native";
import { Card, Image } from "react-native-elements";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { baseUrl } from "../baseURL";
import * as Animatable from 'react-native-animatable';

const Directory = () => {
  const users = useSelector((state) => state.users);

  if (users.isLoading) {
    return <Loading />;
  }

  if (users.errMess) {
    return (
      <View>
        <Text>{users.errMess}</Text>
      </View>
    );
  }

  const renderDirectoryItem = ({ item: user }) => {
    const {
      fname,
      lname,
      email,
      phone,
      avatarImage,
      address1,
      address2,
      city,
      isMember,
      zip,
      state
    } = user;
    return (
      <Animatable.View animation='fadeIn' duration={1000} delay={500}>
          <Card>
            <Card.Title>{`${fname} ${lname}`}</Card.Title>
            <Card.Divider />
            {email ? <Text>Email: {email}</Text> : null}
            {phone ? <Text>Phone: {phone}</Text> : null}
            {address1 ? <Text>Address:</Text> : null}
            {address1 ? <Text>{address1}</Text> : null}
            {address2 ? <Text>{address2}</Text> : null}
            {city || zip ? <Text>{city}, {state} {zip}</Text> : null}
            <Text>
              {isMember ? `${fname} is a member` : null}
            </Text>
            {avatarImage ? <Image
              style={styles.avatarImage}
                source={{ uri: baseUrl + '/images/' + avatarImage }}
            /> : null}
          </Card>
      </Animatable.View>
    );
  };

  return (
    <FlatList
      data={users.usersArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    width: 90,
    height: 90,
    borderWidth: 5,
    marginTop: 20,
  },
});

export default Directory;
