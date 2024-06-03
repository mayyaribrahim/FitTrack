import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Alert, SafeAreaView } from "react-native";
import { doc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";
import { AuthContext } from "../../../context/auth-context";
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";

function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    let unsubscribe;

    if (user) {
      const uid = user.uid;
      setIsEmailVerified(user.emailVerified);

      const userDocRef = doc(FIRESTORE_DB, 'users', uid);
      unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setProfileImage(userData.profileImage);
        } else {
          console.log("User document does not exist.");
        }
      });
    } else {
      console.log("No user is currently signed in.");
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            FIREBASE_AUTH.signOut();
            navigation.navigate("Intro");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenTitle title={"Profile"} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={profileImage ? { uri: profileImage } : require("../../../assets/images/user.png")}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>{firstName} {lastName}</Text>
        {!isEmailVerified && (
          <Text style={styles.verificationText}>Please verify your email!</Text>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('Personal Information')}>Personal Information</PrimaryButton>
        </View>

        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('Settings')}>Settings</PrimaryButton>
        </View>

        <PrimaryButton onPress={handleLogout}>Logout</PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  PageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingLeft: 25,
    paddingBottom: 3,
  },
  image: {
    width: 160,
    height: 160,
    top: 6,
    borderRadius: 100,
    resizeMode: "contain",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    borderRadius: 100,
  },
  nameContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  profileName: {
    fontFamily: "poppins-medium",
    fontSize: 27,
    color: "#000",
  },
  verificationText: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#ff0000",
    
  },
  primaryButton: {
    marginBottom: 3,
  },
  buttonsContainer: {
    marginTop: 40,
  },
});
