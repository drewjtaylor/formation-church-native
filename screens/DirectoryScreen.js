import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Directory from '../Directory/Directory';


const DirectoryScreen = () => {
  return (
    <>
    <Text style={styles.heading}>Welcome to the Church Directory</Text>
    <Text style={styles.subHeading}>If you'd like to add your information, tap here.</Text>
    <Directory />
    </>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },
    subHeading: {
        fontSize: 18,
        textAlign: 'center'
    }
})

export default DirectoryScreen