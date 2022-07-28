import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Button, Card } from "react-native-elements";

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <>
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require("../assets/img/formation-symbol-beach.jpg")}
      />
      <Text style={styles.Headertext}>Formation Church</Text>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <View style={{ alignItems: "center" }}>
            <Card.Title style={styles.cardTitleText}>
              Christ-centered in what we do
            </Card.Title>
            <Card.Image
              style={styles.crossImage}
              source={require("../assets/img/cross-greater-than.png")}
            ></Card.Image>
            <Text style={styles.cardText}>
              Community-focused in how we do it
            </Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={{ alignItems: "center" }}>
            <Card.Title style={styles.cardTitleText}>
              Join us in St. Pete/Tampa Bay!
            </Card.Title>
            <Card.Image
              style={styles.cityImage}
              source={require("../assets/img/assist-tampa-600x401.jpg")}
            />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  Headertext: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "black",
  },
  card: {
    backgroundColor: "white",
  },
  cardTitleText: {
    fontSize: 20,
    color: "black",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  mainImage: {
    width: 395,
    height: 140,
  },
  crossImage: {
    width: 90,
    height: 90,
  },
  cityImage: {
    width: 300,
    height: 100,
  },
});

export default HomeScreen;
