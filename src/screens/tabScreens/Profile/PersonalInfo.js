import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";

function PersonalInfo () {
return (

  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
    
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../../../assets/images/user.png")}/>
    </View>

    <View style={styles.inputContainer}>

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
        //value={password}
        //onChange={handlePasswordChange}
        type="Age"
      />

      <View style={styles.ShortInputContainer}>

        <ShortInput
          secondIconName={"ruler"}
          placeholder={"Height"}
          //value={password}
          //onChange={handlePasswordChange}
          type="Height"
        />

        <ShortInput
          secondIconName={"weight-scale"}
          placeholder={"Weight"}
          //value={password}
          //onChange={handlePasswordChange}
          type="Weight"
        />

      </View > 

      

    </View>

    <View style={styles.primaryButton}>
      <PrimaryButton>Confirm</PrimaryButton>
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
    borderRadius: 100,
    bottom: 65,
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