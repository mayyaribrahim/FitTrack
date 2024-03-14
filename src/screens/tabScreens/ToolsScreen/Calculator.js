import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";

import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import DropDown from "./DropDown";


function Calculator({navigation}) {


  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.inputContainer}>

        <View style={styles.ShortInputContainer}>

          <ShortInput
            secondIconName={"ruler"}
            placeholder={"Height"}
            keyboardType="numeric"
            //value={password}
            //onChange={handlePasswordChange}
            type="Height"
          />

          <ShortInput
            secondIconName={"weight-scale"}
            placeholder={"Weight"}
            keyboardType="numeric"
            //value={password}
            //onChange={handlePasswordChange}
            type="Weight"
          />

        </View > 
        <InputField
          iconName={"calendar"}
          placeholder={"Age"}
          keyboardType="numeric"
          //value={email}
          //onChange={handleEmailChange}
          type="name"
        />

        <InputField
          iconName={"bar-chart-2"}
          placeholder={"Training Days"}
          keyboardType="numeric"
          //value={password}
          //onChange={handlePasswordChange}
          type="email"
        />
      
      </View>

      <View style={styles.dropDownContainer}>
        <DropDown />
      </View>
      

      <View style={styles.primaryButton}>
      <PrimaryButton>Calculate</PrimaryButton>
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