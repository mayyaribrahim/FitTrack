import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryBlack from "../../components/PrimaryBlack";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import LoadingOverlay from "../../components/LoadingOverlay";
function IntroScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (userData) => {
      console.log(userData);
      setUser(userData);
      setLoading(false);
    });


    return unsubscribe;
  }, []);


  useEffect(() => {
    
    if (user) {
      navigation.navigate('home');
    }
  }, [user, navigation]);

  if(loading) {
    return <LoadingOverlay message="Welcome to FitTrack" />;
  }


 
  if (!user) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          style={styles.image}
          source={require("../../assets/images/logo2.png")}
        />
        <View style={styles.twoButtonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => navigation.navigate("Signup")}>Sign up</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryBlack onPress={() => navigation.navigate("Login")}>Login</PrimaryBlack>
          </View>
        </View>
      </View>
    );
  }
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },
  image: {
    width: 300,
    height: 140,
    resizeMode: "contain",
  },
  buttonContainer: {
    marginBottom: 3,
    
  },
  twoButtonsContainer: {
    paddingTop: 40,
  },
});
