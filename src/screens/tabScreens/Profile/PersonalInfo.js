import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import Avatar from "../../../components/Avatar";
import LoadingOverlay from '../../../components/LoadingOverlay';

function PersonalInfo({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user) {
          const uid = user.uid;
          setEmail(user.email); // Set email from the auth user object
          
          const userDocRef = doc(FIRESTORE_DB, 'users', uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setAge(userData.age);
            setHeight(userData.height);
            setWeight(userData.weight);
            setLoading(false);
          } else {
            console.log("User document does not exist.");
            navigation.replace("SecondSignup");
          }
        } else {
          console.log("No user is currently signed in.");
        }
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  const updateUserData = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      
      if (user) {
        const uid = user.uid;
        
        const userDocRef = doc(FIRESTORE_DB, 'users', uid);
        await updateDoc(userDocRef, {
          firstName: firstName,
          lastName: lastName,
          age: age,
          height: height,
          weight: weight
        });
        
        console.log("User data updated successfully.");
        navigation.navigate('profile'); // or any other navigation action
      } else {
        console.log("No user is currently signed in.");
      }
    } catch (error) {
      console.log("Error updating user data: ", error);
    }
  };

  if (loading) {
    return <LoadingOverlay message="Loading..." />;
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Avatar />
      <View style={styles.inputContainer}>
        <View style={styles.ShortInputContainer}>
          <ShortInput
            secondIconName={"ruler"}
            placeholder={height.toString()}
            keyboardType="numeric"
            onChange={setHeight}
            type="Height"
          />
          <ShortInput
            secondIconName={"weight-scale"}
            placeholder={weight.toString()}
            keyboardType="numeric"
            onChange={setWeight}
            type="Weight"
          />
        </View>
        <InputField
          secondIconName={"calendar"}
          placeholder={age.toString()}
          keyboardType="numeric"
          onChange={setAge}
          type="Age"
        />
        <InputField
          iconName={"user"}
          placeholder={firstName}
          onChange={setFirstName}
          type="name"
        />
        <InputField
          iconName={"user"}
          placeholder={lastName}
          onChange={setLastName}
          type="name"
        />
        <InputField
          iconName={"mail"}
          placeholder={email}
          editable={false} // Make the email field non-editable
          type="email"
        />
      </View>
      <View style={styles.primaryButton}>
        <PrimaryButton onPress={updateUserData}>Confirm</PrimaryButton>
      </View>
    </KeyboardAvoidingView>
  );
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
  editButton: {
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
});
