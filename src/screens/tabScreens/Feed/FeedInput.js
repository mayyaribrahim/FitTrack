import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity, Image, SafeAreaView, } from 'react-native';

function FeedInput(props) {
  const [enteredTweetText, setEnteredTweetText] = useState('');

  
  function tweetInputHandler(enteredText) {
    setEnteredTweetText(enteredText);
  }

  function addTweetHandler() {
    props.onAddTweet(enteredTweetText);
    setEnteredTweetText('')
  }

  return (

    <Modal style={styles.ModalContanier} visible={props.visible} animationType="slide">

      <SafeAreaView style={styles.inputContainer}>

        <View style={styles.userContainer}>
          <Image style={styles.userImage} source={require("../../../assets/images/user.png")}/>
          <Text style={styles.userName}>Mayyar Ibrahim</Text>
        </View>
      

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
          <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={addTweetHandler}>
          <Text style={styles.post}>Post</Text>
          </TouchableOpacity>

        </View>

        
          <TextInput style={styles.textInput} 
            placeholder='write something'
            onChangeText={tweetInputHandler} 
            value={enteredTweetText}
            multiline={true} 
          /> 
        
        
        {/* this value means after typing the goal in the inputtext it will make it a blank again
        because we wrote  setEnteredTweetText('') in the function*/}
        
        

      </SafeAreaView>

    </Modal>

  );
}

export default FeedInput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'flex start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom:30,
    backgroundColor: 'white',
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 50,
  },

  userImage: {
    width: 50,
    height: 50,
  },

  userName: {
    fontFamily: "poppins",
    marginLeft: 10,
  },

  textInputCon:{
    justifyContent: 'flex-start',
  },

  textInput: {
    fontFamily: "poppins",
    textAlign: 'left',
    textAlignVertical: 'top',
    backgroundColor: '#E9E9E9',
    color: 'black',
    borderRadius: 30,
    width: '90%',
    paddingBottom: 200,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'justify'
  },

  buttonContainer:{
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: "absolute",
    right: 20,
    top: 50
  },

  button:{
    width: 80,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    width: 80,
    height: 40,
    borderRadius: 100,
   
    alignItems: "center",
    justifyContent: "center",
  },

  post: {
    fontFamily: "poppins",
    color: "white",
    fontSize: 14,
  },

  cancel: {
    fontFamily: "poppins",
    color: "#272D34",
    fontSize: 16,
  },

});