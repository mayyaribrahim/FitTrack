import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity, } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import Avatar from "../../../components/Avatar";

function PersonalInfo ({ navigation }) {
return (

  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
    
    <Avatar />

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
        iconName={"user"}
        placeholder={"Name"}
        //value={email}
        //onChange={handleEmailChange}
        type="name"
      />

      <InputField
        iconName={"mail"}
        placeholder={"Email"}
        //value={password}
        //onChange={handlePasswordChange}
        type="email"
      />

      <InputField
        secondIconName={"calendar"}
        placeholder={"Age"}
        keyboardType="numeric"
        //value={password}
        //onChange={handlePasswordChange}
        type="Age"
      />

    </View>

    <View style={styles.primaryButton}>
      <PrimaryButton onPress={() => navigation.navigate('profile')}>Confirm</PrimaryButton>
    </View>

  </KeyboardAvoidingView>
  
)
}

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',

  },

  image: {
    width: 160,
    height: 162,
  },
  
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 250,
    bottom: 80,
  },

  editButton:{
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 6,
    bottom: 0,
    backgroundColor: "#E9E9E9",
    
  },

  inputContainer: {
    bottom: 20,
    marginBottom: 10,
    bottom: 45,
  },

  ShortInputContainer: {
    flexDirection: 'row',
  },

  primaryButton: {
    bottom: 35,
  },

})