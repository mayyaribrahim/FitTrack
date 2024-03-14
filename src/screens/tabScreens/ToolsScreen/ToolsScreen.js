import { View, Text, StyleSheet, ScrollView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";

function ToolsScreen({navigation}) {
  return (
    
    <View style={styles.container}>

      <TabScreenTitle title={"Tools"} />

      <View style={styles.buttonsContainer}>

        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('Favorite Exercises')}>Favorite Exercises</PrimaryButton>
        </View>

        <View style={styles.primaryButton}>
          <PrimaryButton onPress={() => navigation.navigate('Favorite Meals')}>Favorite Meals</PrimaryButton>
        </View>

        <PrimaryButton onPress={() => navigation.navigate('Macros Calculator')}>Macros Calculator</PrimaryButton>

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
    alignItems: 'center',
  },

  primaryButton: {
    marginBottom: 3,
  },

  buttonsContainer: {
    marginTop: 50,
  },
})