import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";

import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import DropDown from "../../../components/DropDown";
import TrainDropDown from "../../../components/TrainDropDown";
import { calculateMacros } from "../../../hooks/calculateMarcos";




function Calculator({navigation}) {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
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

  function handleCalculatePress() {
    if(!selectedGoal || !selectedDay || !height || !weight || !age) {
      Alert.alert("missing Information", "please fill in all the feilds.")
    }
    else { 
      {
        const { calories, protein, carbs, fat } = calculateMacros(height, weight, age, selectedGoal, selectedDay );
        setProtein(protein);
        setCarbs(carbs);
        setFat(fat);
        setCalories(calories);
        setShowModal(true);
      }
    }
       
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

              <TouchableOpacity style={styles.doneButton} onPress={() => setShowModal(false)}>
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