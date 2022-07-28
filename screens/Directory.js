import users from "../demodata/demoUsers";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card, Image } from "react-native-elements";

const Directory = () => {

  const renderItem = ({ item }) => {
    const {fname, lname, email, avatarImage, isMember} = item;
    return (
      <Card>
        <Card.Title>{`${fname} ${lname}`}</Card.Title>
        <Card.Divider />
        <Text>Email: {email}</Text>
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
