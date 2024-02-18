import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from "../ui/PrimaryButton";
import PrimaryBlack from "../ui/PrimaryBlack";

function IntroScreen ({navigation}) {

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Image style={styles.image} source={require('../assets/images/logo2.png')} />

      <View style={styles.twoButtonsContaner}>

        <View style={styles.buttonContainer}>
          <PrimaryBlack onPress={()=> navigation.navigate('Login')}>Login</PrimaryBlack>
        </View>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton>Sign up</PrimaryButton>
        </View> 

      </View>
     
    </View>
  );
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  image:{
    width: 300,
    height: 140,
    
  },
  buttonContainer: {
    marginBottom: 2,
  },
  twoButtonsContaner: {
    paddingTop: 70,
  }
});
