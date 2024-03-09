import { React, useState } from "react";
import { TextInput, StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { Feather ,MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';


function InputField ({ placeholder, value, onChange, label, type, iconName, secondIconName, }) {
  
  const [secureText, setSecureText] = useState(true);

  return (
    
    <View style={styles.container}>

      <View style={styles.secondIcon}>
        <FontAwesome6 name={secondIconName} size={20} color="#BEBEBE" /> 
      </View>
      
      <View style={styles.icon}>
        <Feather name={iconName} size={20} color="#BEBEBE" /> 
      </View>
      
      
       
      <TextInput
        value={value}
        label= {label}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={type === "password" ? secureText : false}
        style={styles.input}
      />
      {type === "password" && (
        <Pressable onPress={() => setSecureText((prev) => !prev)}>
          <MaterialCommunityIcons
            name={secureText ? "eye-off" : "eye"}
            size={20}
            color="#BEBEBE"
          />
        </Pressable>
      )}

    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E9E9E9",
    borderRadius: 7,
    paddingHorizontal: 12,
    width: 300,
    gap: 10,
    margin: 8,
    alignItems: 'center',
    shadowColor: "black",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  input: {
    fontFamily: 'poppins',
    width: "73%",
    height: 50,
    borderColor: 'red',
    //borderWidth: 1,
    right: 14,
    
  },
  label: {
    marginBottom: 5,
  },
  icon: {
    right:13,
    
  },
  secondIcon: {
    right:2,
    
  },
});

