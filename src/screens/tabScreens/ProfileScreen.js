import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import TabScreenTitle from "../../components/TabScreenTitle";
import PrimaryButton from "../../components/PrimaryButton";

function ProfileScreen() {
  return (
    
    <View style={styles.container}>

      <TabScreenTitle title={"Profile"} />

      <View style={styles.boxContainer}>
        <View style={styles.box}>

          <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../../assets/images/user2.png")}/>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>Mayyar Ibrahim</Text>
          </View>



          <View style={styles.buttonsContainer}>

            <View style={styles.primaryButton}>
              <PrimaryButton>Personal Information</PrimaryButton>
            </View>

            <View style={styles.primaryButton}>
              <PrimaryButton>Setting</PrimaryButton>
            </View>
  
           <PrimaryButton>Logout</PrimaryButton>

          </View>
          

        </View>
        
      </View>

    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 45,
  },
  box: {
    width: 345,
    height: 677,
    borderRadius: 20,
    backgroundColor: "#EAEAEA", 
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  boxContainer: {
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
    width: 140,
    height: 160,
    top: 6,
   
  },
  
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:  35,
    height: 180,
    width: 180,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
  },

  nameContainer: {
    alignItems: "center",
    marginTop: 15,
  },

  profileName: {
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