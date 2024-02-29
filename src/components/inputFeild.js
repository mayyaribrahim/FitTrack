import { React, useState } from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Feather ,MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";


function InputField ({
  placeholder,
  value,
  onChange,
  label,
  type,
  secureTextEntry,
  iconName,
  secondIconName,

}) {
  const [secureText, setSecureText] = useState(true);

  return (
    
    <View style={styles.container}>

      {/*<FontAwesome6 name={secondIconName} size={20} color="#BEBEBE" />*/}
      {/*{label ? <Text style={styles.label}>{label}</Text> : null}*/}

      <View style={styles.secondIcon}>
        <FontAwesome6 name={secondIconName} size={20} color="#BEBEBE" /> 
      </View>
      

      <View style={styles.icon}>
        <Feather name={iconName} size={20} color="#BEBEBE" /> 
      </View>
      
       
       
      <TextInput
        value={value}
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
    width: 280,
    gap: 10,
    margin: 8,
    alignItems: 'center',
  },
  input: {
    fontFamily: 'poppins',
    width: "73%",
    height: 45,
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

