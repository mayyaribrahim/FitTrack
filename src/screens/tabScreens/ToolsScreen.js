import { View, Text, StyleSheet, ScrollView } from "react-native";
import TabScreenTitle from "../../components/TabScreenTitle";
import PrimaryButton from "../../components/PrimaryButton";

function ToolsScreen() {
  return (
    
    <View style={styles.container}>

      <TabScreenTitle title={"Tools"} />

      <View style={styles.boxContainer}>
        <View style={styles.box}>

          <View style={styles.buttonsContainer}>

            <View style={styles.primaryButton}>
              <PrimaryButton>Favorite Exercises</PrimaryButton>
            </View>

            <View style={styles.primaryButton}>
              <PrimaryButton>Favorite Meals</PrimaryButton>
            </View>

            <PrimaryButton>Macros calculator</PrimaryButton>

          </View>

        </View>

      </View>

    </View>
  )
}

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  
  },

  primaryButton: {
    marginBottom: 3,
  },

  buttonsContainer: {
    marginTop: 50,
  },
})