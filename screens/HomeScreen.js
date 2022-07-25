import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const HomeScreen = () => {
  return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.mainImage} source={require('../assets/img/formation-symbol-beach.jpg')}/>
            <Text style={styles.text}>Formation Church</Text>
        
        
        
        
        
        
        
        </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
    mainImage: {
        width: 395,
        height: 200
    }
  });





export default HomeScreen;