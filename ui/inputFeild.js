import { React, useState } from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Feather ,MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";


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
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    
    <View style={styles.container}>

      <Feather name={iconName} size={20} color="#BEBEBE" /> 
    
      {label ? <Text style={styles.label}>{label}</Text> : null}

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
    width: "77%",
    height: 45,
    borderColor: 'red',
    //borderWidth: 1,
  },
  label: {
    marginBottom: 5,
  },
});

