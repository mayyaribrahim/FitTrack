import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import PrimaryButton from "../../../components/PrimaryButton";

function Settings({navigation}) {
  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.buttonsContainer}>

        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('Change Password')}>Change Password</PrimaryButton>
        </View>

        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('About')}>About</PrimaryButton>
        </View>

        <PrimaryButton onPress={() => navigation.navigate('Terms And Conditions')}>Terms and Conditions</PrimaryButton>

      </View>

    </SafeAreaView>
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