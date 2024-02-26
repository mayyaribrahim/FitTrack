import { View, Text, StyleSheet, ScrollView } from "react-native";
import TabScreenTitle from "../../components/TabScreenTitle";

function CalculationScreen() {
  return (
    
    <ScrollView style={styles.container}>

      <TabScreenTitle title={"Calculator"} />

      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
      </View>

    </ScrollView>
  )
}

export default CalculationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 45,
  },
  box: {
    width: 345,
    height: 677,
    borderRadius: 20,
    backgroundColor: "#EAEAEA", 
    
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})