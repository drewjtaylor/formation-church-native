import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

export const CustomDivider = () => <Divider width={2} style={{ marginBottom: 10 }} />;

const WhatWeBelieveScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.bigHeader}>Statement of faith</Text>
        <Text style={styles.subHeader}>The Scriptures</Text>
        <Text style={styles.statement}>
          We believe the sixty-six books of the Bible to be the infallible,
          written Word of God, verbally inspired by the Holy Spirit, inerrant in
          the original manuscripts, and the only and final authority in all
          matters of faith and conduct.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Godhead</Text>
        <Text style={styles.statement}>
          We believe in One God, creator and sustainer of the universe, who is
          eternally existent in three persons: Father, Son and Holy Spirit.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Person and work of Christ</Text>
        <Text style={styles.subHeader}>1. Birth</Text>
        <Text style={styles.statement}>
          We believe that Jesus Christ is the eternal Son of God, that He was
          conceived by the Holy Spirit and became incarnate through the virgin
          birth, and that He unites forever in His person perfect deity and true
          humanity.
        </Text>
          <Text style={styles.subHeader}>2. Atonement</Text>
          <Text style={styles.statement}>
            We believe that Jesus Christ lived a sinless life, that He was
            crucified as the substitutionary sacrifice for the sins of all men,
            that He rose bodily from the dead, that He ascended into heaven
            where He is now exalted at the right hand of the Father, and where
            He intercedes for the believer.
          </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>
          The Person and Work of the Holy Spirit
        </Text>
        <Text style={styles.statement}>
          We believe that the Holy Spirit is Himself God; that He glorifies the
          Lord Jesus Christ; that He was sent to convict the world of sin,
          righteousness and judgment; that He regenerates and indwells the
          believer; that He seals the believer unto the day of redemption; and
          that He imparts gifts to each believer as He wills for the edification
          of the church.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Total Depravity of man</Text>
        <Text style={styles.statement}>
          We believe that man was created in the image and likeness of God, but
          that as a result of Adam's sin the race fell, inheriting a sinful
          nature and becoming alienated from God; and that man is totally
          depraved and of himself totally unable to remedy his lost condition.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>Salvation</Text>
        <Text style={styles.statement}>
          We believe that all who by grace through faith receive Jesus Christ
          are born again of the Holy Spirit, and are therefore children of God
          and eternally saved, and that the Holy Spirit indwells every believer
          to enlighten, guide and enable him in life and service.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Return of Christ</Text>
        <Text style={styles.statement}>
          We believe God's people should live in a state of looking forward to
          the assured hope of Christ's actual, physical return to set the world
          right and rule with true justice, and that it could happen in our
          lifetime.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Eternal State of Mankind</Text>
        <Text style={styles.statement}>
          We believe in the bodily resurrection of believers and unbelievers,
          the saved being raised unto eternal life and the unbelievers unto
          everlasting punishment.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>The Church</Text>
        <Text style={styles.statement}>
          We believe that the church, which is the body of Christ, is a
          spiritual organism made up of all born again persons of this age and
          that the establishment and continuance of local churches is clearly
          taught in the New Testament.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>Baptism and the Lord's Supper</Text>
        <Text style={styles.statement}>
          We believe in water baptism by immersion for believers. We also
          believe that God has given two ordinances to the church, Baptism and
          the Lord's Supper.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>Gifts of the Spirit</Text>
        <Text style={styles.statement}>
          We believe that God gives spiritual gifts to all believers for the
          building up of the body of Christ. We believe that God answers the
          prayers of His people and meets their needs according to his purpose.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>Satan</Text>
        <Text style={styles.statement}>
          We believe that Satan is an angelic personality who fell and became
          the archenemy of God and man; that Jesus Christ in His death and
          resurrection defeated Satan; and that he finally will be cast into the
          lake of fire.
        </Text>
        <CustomDivider />

        <Text style={styles.subHeader}>
          The Person and Work of the Holy Spirit
        </Text>
        <Text style={styles.statement}>
          We believe that the Holy Spirit is Himself God; that He glorifies the
          Lord Jesus Christ; that He was sent to convict the world of sin,
          righteousness and judgment; that He regenerates and indwells the
          believer; that He seals the believer unto the day of redemption; and
          that He imparts gifts to each believer as He wills for the edification
          of the church.
        </Text>
        <CustomDivider />
      </View>
    </ScrollView>
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

export default WhatWeBelieveScreen;
