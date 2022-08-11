import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Directory from "../Directory/Directory";
import * as MailComposer from "expo-mail-composer";

const DirectoryScreen = () => {
  const emailDirectoryInfo = () => {
    MailComposer.composeAsync({
      recipients: ["admin@formationchurch.com"],
      subject: "New directory information",
      body: "This email was generated from the Formation Church app. Please add my information to the directory.",
    });
  };

  return (
    <>
      <View>
        <Text style={styles.heading}>Welcome to the Church Directory</Text>
        <Pressable onPress={emailDirectoryInfo}>
          <Text style={styles.subHeading}>
            If you'd like to add your information, or your entry needs
            updated/missing information, please tap here to email us.
          </Text>
        </Pressable>
      </View>
      <Directory />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default DirectoryScreen;
