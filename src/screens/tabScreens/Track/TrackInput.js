import { collection, addDoc, doc,  onSnapshot, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import TabScreenTitle from '../../../components/TabScreenTitle';

function TrackInput(props) {
  const [enteredTweetText, setEnteredTweetText] = useState('');
  const [userName, setUserName] = useState(""); 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");

  const [exName, setExName] = useState('');
  const [exReps, setExReps] = useState('');
  const [exWeight, setExWeight] = useState('');

 

  function addTweetHandler() {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      const uid = user.uid;
  
      // Create a new exercise object
      const newExercise = {
        name: exName,
        reps: exReps,
        weight: exWeight,
      };
  
      // Save the new exercise to the "progress" subcollection of the user
      addDoc(collection(FIRESTORE_DB, `users/${uid}/progress`), newExercise)
        .then(() => {
          props.onAddTweet(newExercise);
          setExName('');
          setExReps('');
          setExWeight('');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }

  function nameInput(enteredText) {
    setExName(enteredText);
  }

  function repsInput(enteredText) {
    setExReps(enteredText);
  }

  function weightsInput(enteredText) {
    setExWeight(enteredText);
  }

  return (

    <Modal style={styles.ModalContanier} visible={props.visible} animationType="slide">

      <SafeAreaView style={styles.inputContainer}>

      <View style={styles.TitleContainer}>
        <Text style={styles.PageTitle}>Add exercise</Text>
      </View>

        <View style={styles.userContainer}>
          
          {/* <Text style={styles.userName}>{userName}</Text> */}
          <Text style={styles.userName}>Exercise name</Text>
        </View>
        
        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={nameInput} 
          value={exName}
    
        /> 

        <View style={styles.Container}>
          
          {/* <Text style={styles.userName}>{userName}</Text> */}
          <Text style={styles.userName}>Sets & Reps</Text>

        </View>

        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={repsInput} 
          value={exReps}
          
        /> 
        
        
        <View style={styles.Container}>
          
          {/* <Text style={styles.userName}>{userName}</Text> */}
          <Text style={styles.userName}>Max wieght </Text>

        </View>

        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={weightsInput} 
          value={exWeight}
          multiline={true} 
        /> 

        <View style={styles.bContainer}>

          <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
           <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={addTweetHandler}>
            <Text style={styles.post}>Add</Text>
          </TouchableOpacity>

        </View>
        

      </SafeAreaView>

    </Modal>

  );
}

export default TrackInput;


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
    marginTop: 30,
  },

  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 5,
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
    backgroundColor: '#f1f1f1',
    color: 'black',
    borderRadius:15,
    width: '90%',
    padding: 20,
    
    // borderColor: 'black',
    // borderWidth: 1,
    textAlign: 'justify',
    bottom: 5,
  },

  buttonContainer:{
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: "absolute",
    right: 20,
    top: 50
  },

  bContainer:{ 
    alignContent: 'center',
    marginTop: 10,
  },

  button:{
    width: 150,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    width: 150,
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

  PageTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 27,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingBottom: 3,
  },
  TitleContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 25, 
    top: 10,
  }

});