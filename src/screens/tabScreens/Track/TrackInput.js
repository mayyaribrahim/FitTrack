import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';

function TrackInput(props) {
  const [enteredExerciseName, setEnteredExerciseName] = useState('');
  const [enteredReps, setEnteredReps] = useState('');
  const [enteredWeight, setEnteredWeight] = useState('');

  const addExerciseHandler = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const progressRef = collection(FIRESTORE_DB, `users/${uid}/progress`);
      try {
        const docRef = await addDoc(progressRef, {
          name: enteredExerciseName,
          reps: enteredReps,
          weight: enteredWeight,
          createdAt: serverTimestamp(), // Add timestamp here
        });

        props.onAddExercise({
          id: docRef.id,
          name: enteredExerciseName,
          reps: enteredReps,
          weight: enteredWeight
        });

        setEnteredExerciseName('');
        setEnteredReps('');
        setEnteredWeight('');
        props.onCancel(); // Close the modal after adding the exercise
      } catch (error) {
        console.error('Error adding exercise to Firestore: ', error);
      }
    }
  };

  const isButtonDisabled = !enteredExerciseName || !enteredReps || !enteredWeight;

  return (
    <Modal style={styles.ModalContanier} visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.inputContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.PageTitle}>Add exercise</Text>
        </View>

        <View style={styles.userContainer}> 
          <Text style={styles.userName}>Exercise name</Text>
        </View>
        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={setEnteredExerciseName} 
          value={enteredExerciseName}
        /> 

        <View style={styles.Container}>  
          <Text style={styles.userName}>Sets & Reps</Text>
        </View>
        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={setEnteredReps} 
          value={enteredReps}   
        /> 
        
        <View style={styles.Container}> 
          <Text style={styles.userName}>Max weight</Text>
        </View>
        <TextInput style={styles.textInput} 
          placeholder='write something'
          onChangeText={setEnteredWeight} 
          value={enteredWeight}
        /> 

        <View style={styles.bContainer}>
          <TouchableOpacity 
            style={[styles.button, isButtonDisabled && styles.disabledButton]} 
            onPress={addExerciseHandler} 
            disabled={isButtonDisabled}
          >
            <Text style={styles.post}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
           <Text style={styles.cancel}>Cancel</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 30,
    backgroundColor: 'white',
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 11,
    marginTop: 50,
  },

  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 11,
    marginTop: 12,
  },

  userImage: {
    width: 50,
    height: 50,
  },

  userName: {
    fontFamily: "poppins",
    marginLeft: 10,
  },

  textInput: {
    fontFamily: "poppins",
    textAlign: 'left',
    textAlignVertical: 'top',
    backgroundColor: '#f1f1f1',
    color: 'black',
    borderRadius: 8,
    width: '90%',
    padding: 12,
    textAlign: 'justify',
    bottom: 5,
    height: 50, 
  },

  bContainer: { 
    alignContent: 'center',
    marginTop: 10,
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  disabledButton: {
    backgroundColor: "#A9A9A9",
  },

  cancelButton: {
    width: 150,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
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
