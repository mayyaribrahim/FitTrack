import useState from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';

const LoginScreen = () => {
 
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('../assets/images/logo2.png')} />

      <View style={styles.inputContainer}>

        <Text style={styles.label}>Email</Text>

        <View style={[styles.textInputOuterContainer , {marginBottom: 24}] }>
         <TextInput style={styles.textInput} /> 
        </View>
        

        <Text style={styles.label}>Password</Text>

        <View style={styles.textInputOuterContainer}>
         <TextInput style={styles.textInput} secureTextEntry /> 
        </View>

      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <PrimaryButton>Login</PrimaryButton>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },

  image:{
    width: 210,
    height: 100,
    
  },

  inputContainer: {
    marginTop: 60,
  },

  label: {
    marginBottom: 5,
    fontSize: 18,
  },

  textInputOuterContainer: {
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
    height: 51,
    width: 285,
    borderRadius: 10,
  },

  textInput: {
    height: 40,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  forgotPasswordButtonText: {
    color: 'black',
    fontSize: 13,
    marginTop: 18,
  },

  buttonContainer: {
    marginTop: 80,
  }
});

export default LoginScreen;