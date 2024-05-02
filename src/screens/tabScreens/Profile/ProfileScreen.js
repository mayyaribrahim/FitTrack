import { View, Text, StyleSheet, Image, Alert, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";
import { AuthContext } from "../../../context/auth-context";
import { useContext } from "react";
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";



function ProfileScreen({navigation}) {
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
            //authCtx.logout()
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
      <Image style={styles.image} source={require("../../../assets/images/user.png")}/>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>Mayyar Ibrahim</Text>
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
        
  )
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
    resizeMode: "contain",
   
  },
  
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:  35,
    borderRadius: 100,
  },

  nameContainer: {
    alignItems: "center",
    marginTop: 15,
  },

  profileName: {
    fontFamily: "poppins-semibold",
    fontSize: 27,
    fontWeight: 'bold',
    color: "#000",

  },

  primaryButton: {
    marginBottom: 3,
  },

  buttonsContainer: {
    marginTop: 50,
  },

})