import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, ActivityIndicator } from "react-native";
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import PrimaryButton from "../../../components/PrimaryButton";
import InputField from "../../../components/InputFeild";
import { useNavigation } from '@react-navigation/native';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert("Error", "New passwords do not match. Please try again.");
      return;
    }

    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        Alert.alert("Success", "Password updated successfully.");
        navigation.goBack();  // Navigate back to the previous screen (Settings page)
      } catch (error) {
        console.log("Error updating password: ", error);
        Alert.alert("Error", "Failed to update password. Please check your old password and try again.");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No user is currently signed in.");
      Alert.alert("Error", "No user is currently signed in.");
      setLoading(false);
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

      <InputField
        iconName={"lock"}
        placeholder="Confirm new password"
        secureTextEntry
        value={confirmNewPassword}
        onChange={setConfirmNewPassword}
        type="password"
      />

      <View style={styles.primaryButton}>
        {loading ? (
          <ActivityIndicator size="large" color="#000000" />
        ) : (
          <PrimaryButton onPress={handlePasswordChange}>Confirm</PrimaryButton>
        )}
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
