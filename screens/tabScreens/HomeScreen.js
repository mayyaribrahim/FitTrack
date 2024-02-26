import { View, Text, StyleSheet, ScrollView } from "react-native";

function HomeScreen() {
  return (
    
    <ScrollView style={styles.container}>

      <Text style={styles.PageTitle}>Hello Mayyar</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 60,
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
  
  PageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingLeft: 25,
    bottom: 5,
    
  },
})