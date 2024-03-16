import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";

import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import DropDown from "../../../components/DropDown";
import TrainDropDown from "../../../components/TrainDropDown";
import { calculateMacros } from "../../../hooks/calculateMarcos";




function Calculator({navigation}) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  

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
    // console.log(trainDay)
  }

  function addGoalHandler(goal) {
    setSelectedGoal(goal)
   // console.log(goal)
  }


   useEffect(() => {
    if(!selectedGoal || !selectedDay||
      !height||
      !weight||
      !age) {
        return
      }
   calculateMacros(selectedGoal, selectedDay, height, weight, age);
  }, [calculateMacros]);
  
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
      <PrimaryButton onPress={() => calculateMacros(height, weight, age, selectedGoal, selectedDay )}>Calculate</PrimaryButton>
      </View>  

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

})