import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import PrimaryButton from "../../../components/PrimaryButton";
import InputField from "../../../components/InputFeild";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        Alert.alert("Success", "Password updated successfully.");
      } catch (error) {
        console.log("Error updating password: ", error);
        Alert.alert("Error", "Failed to update password. Please check your old password and try again.");
      }
    } else {
      console.log("No user is currently signed in.");
      Alert.alert("Error", "No user is currently signed in.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputField
        iconName={"lock"}
        placeholder="Old password"
        secureTextEntry
        value={oldPassword}
        onChange={setOldPassword}
        type="password"
      />

      <InputField
        iconName={"lock"}
        placeholder="New password"
        secureTextEntry
        value={newPassword}
        onChange={setNewPassword}
        type="password"
      />

      <View style={styles.primaryButton}>
        <PrimaryButton onPress={handlePasswordChange}>Confirm</PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    marginTop: 40,
  },
  primaryButton: {
    marginTop: 35,
  },
});
