import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryBlack from "../../components/PrimaryBlack";

function IntroScreen({ navigation }) {
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
    height: 143,
  },
  buttonContainer: {
    marginBottom: 3,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  twoButtonsContainer: {
    paddingTop: 70,
  },
});
