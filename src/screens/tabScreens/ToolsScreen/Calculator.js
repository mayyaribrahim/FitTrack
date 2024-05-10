import { collection, addDoc, doc, setDoc, updateDoc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import DropDown from "../../../components/DropDown";
import TrainDropDown from "../../../components/TrainDropDown";
import { calculateMacros } from "../../../hooks/calculateMarcos";
import { getAuth } from 'firebase/auth';



function Calculator({navigation}) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fat, setFat] = useState(null);
  const [calories, setCalories] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleHeightChange = (enteredHeight) => {
    setHeight(enteredHeight);
  };
  const handleWeightChange = (enteredWeight) => {
    setWeight(enteredWeight);
  };
  const handleAgeChange = (enteredAge) => {
    setAge(enteredAge);
  };

  
  function addDayHandler(trainDay) {
    setSelectedDay(trainDay)
  }
  function addGoalHandler(goal) {
    setSelectedGoal(goal)
  }


  useEffect(() => {
    calculateMacros(selectedGoal, selectedDay, height, weight, age);
  }, [calculateMacros]);

  async function handleCalculatePress() {
    if (!selectedGoal || !selectedDay || !height || !weight || !age) {
      Alert.alert("Missing Information", "Please fill in all the fields.");
    } else {
      const { calories, protein, carbs, fat } = calculateMacros(
        height,
        weight,
        age,
        selectedGoal,
        selectedDay
      );
      setProtein(protein);
      setCarbs(carbs);
      setFat(fat);
      setCalories(calories);
      setShowModal(true);
  
      try {
        // Get the currently logged-in user
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user) {
          const uid = user.uid;
  
          // Reference to the user's document
          const userDocRef = doc(FIRESTORE_DB, 'users', uid);
          
          // Reference to a subcollection under the user's document
          const macrosCollectionRef = collection(userDocRef, 'macros');
  
          // Check if a document already exists in the "macros" subcollection
          const querySnapshot = await getDocs(macrosCollectionRef);
          if (!querySnapshot.empty) {
            // If a document exists, update its values
            const macrosDocRef = querySnapshot.docs[0].ref;
            await updateDoc(macrosDocRef, {
              calories: calories,
              protein: protein,
              carbs: carbs,
              fat: fat
            });
          } else {
            // If no document exists, add a new document to the "macros" subcollection
            await addDoc(macrosCollectionRef, {
              calories: calories,
              protein: protein,
              carbs: carbs,
              fat: fat
            });
          }
  
          console.log("Calculated macros saved successfully for UID: ", uid);
          
        } else {
          console.error("No user is currently signed in.");
        }
      } catch (error) {
        console.error("Error saving calculated macros: ", error);
      }
    }
  }

  function doneButton() {
    setShowModal(false);
    navigation.navigate("macros");
  }
  
  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.inputContainer}>

        <View style={styles.ShortInputContainer}>

          <ShortInput
            secondIconName={"ruler"}
            placeholder={"Height"}
            keyboardType="numeric"
            value={height}
            onChange={handleHeightChange}
          />

          <ShortInput
            secondIconName={"weight-scale"}
            placeholder={"Weight"}
            keyboardType="numeric"
            value={weight}
            onChange={handleWeightChange}
          />

        </View > 
        <InputField
          iconName={"calendar"}
          placeholder={"Age"}
          keyboardType="numeric"
          value={age}
          onChange={handleAgeChange}
        />

        
      </View>

      <View style={styles.dropDownContainer}>
        <TrainDropDown onAddDay={addDayHandler} />
      </View>

      <View>
        <DropDown onAddGoal={addGoalHandler} />
      </View>
      

      <View style={styles.primaryButton}>
        <PrimaryButton onPress={handleCalculatePress
          }>
          Calculate
        </PrimaryButton>
      </View>  

      {protein !== null || carbs !== null || fat !== null || calories !== null ? (

        <Modal visible={showModal} animationType="fade" transparent >

          <View style={styles.modalContainer}>

            <View style={styles.modalContent}>

              

              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Calories: </Text>
                <Text style={styles.result}>{calories}</Text>
              </View>

              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Protein: </Text>
                <Text style={styles.result}>{protein}g</Text>
              </View>

              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Carbs: </Text>
                <Text style={styles.result}>{carbs}g</Text>
              </View>

              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Fat: </Text>
                <Text style={styles.result}>{fat}g</Text>
              </View>

              <TouchableOpacity style={styles.doneButton} onPress={doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>

            </View>

          </View>

        </Modal> 
      ): null}

      

    <View></View>

      

    </SafeAreaView>
  )
}

export default Calculator;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    
    justifyContent: 'flex-start', 
  },

  inputContainer: {
    marginBottom: 30,
    marginTop: 30,
    alignItems: "center",
   
  },

  ShortInputContainer: {
    flexDirection: 'row',
    right:4
  },

  pickerContainer: {
    bottom: 30,
  },

  dropDownContainer: {
    bottom: 20,
  },

  primaryButton: {
    alignItems: "center",
    marginTop: 20,
  },

  resultsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  
  eachResult: {
    flexDirection: "row",
    alignItems: "center",
    width: '90%',
    justifyContent: "space-between",
    marginBottom: 20,
  },

  resultTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 26,
    color: '#272D34',
  },

  result: {
    fontFamily: 'poppins',
    fontSize: 20,
    color: '#272D34',
  },

})