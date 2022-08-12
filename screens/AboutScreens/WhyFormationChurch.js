import { View, Text, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-elements";

const WhyFormationChurchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>"Formation Church" is a weird name.</Text>
      <Text style={styles.statement}>
        There are a lot of churches with names like "Renew Church," or "Hope
        Church." Every town has a "First Baptist Church" (although no one really
        knows who was first.) So why did we pick "Formation Church?" It doesn't
        flow in regular speech. Some people might be confused becuase we're not
        associated with reformed theology. It's not as flashy as some church
        names, and you can't learn much about our beliefs from just our title.
      </Text>
      <Text style={[styles.bigHeader, {marginBottom: 10}]}>So why Formation Church?</Text>
      <Text style={styles.subHeader}>
        "Formation" implies that something was made intentionally.
      </Text>
      <Text style={styles.statement}>
        It also implies care in how we're created, like an artist forming clay.
        The idea of being "formed" also impliesa purpose to the shape. Whether
        it's how we sing, what we preach, how we meet as a community, or how we
        serve our extended community, we want the way we do things to be
        purposeful in a way that honors God.
      </Text>
      <Divider />
      <Pressable>
          <Text style={styles.subHeader}>"Your hands made me and formed me; give me understanding to learn your commands." (NIV, Psalm 119:73)</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  bigHeader: {
    fontSize: 30,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  statement: {
    marginBottom: 10,
  },
});

export default WhyFormationChurchScreen;
