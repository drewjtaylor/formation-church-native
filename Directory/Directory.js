import users from "../demodata/demoUsers";
import { Text, StyleSheet, FlatList } from "react-native";
import { Card, Image } from "react-native-elements";
import { useSelector } from 'react-redux';

const Directory = () => {

    // const users = useSelector((state) => state.users);

  const renderItem = ({ item }) => {
    const {fname, lname, email, avatarImage, address1, address2, city, isMember} = item;
    return (
      <Card>
        <Card.Title>{`${fname} ${lname}`}</Card.Title>
        <Card.Divider />
        <Text>Email: {email}</Text>
        {address1 ? <Text>Address:</Text> : null}
        {address1 ? <Text>{address1}</Text> : null}
        {address2 ? <Text>{address2}</Text> : null}
        <Text>{city}</Text>
        <Text>{fname} {isMember ? 'is' : 'is not'} a member{isMember? null : ' yet'}.</Text>
        <Image
          style={styles.avatarImage}
        //   source={ `../demodata/${avatarImage}` }
        />
      </Card>
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
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
