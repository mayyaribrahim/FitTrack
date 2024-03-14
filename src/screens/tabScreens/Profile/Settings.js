import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";

function Settings() {
  return (
    
    <View style={styles.container}>

      <View style={styles.buttonsContainer}>

        <View style={styles.primaryButton}>
          <PrimaryButton>Change Password</PrimaryButton>
        </View>

        <View style={styles.primaryButton}>
          <PrimaryButton>About</PrimaryButton>
        </View>

        <PrimaryButton>Terms and Conditions</PrimaryButton>

      </View>

    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
  },

  primaryButton: {
    marginBottom: 3,
  },

  buttonsContainer: {
    marginTop: 50,
  },
})