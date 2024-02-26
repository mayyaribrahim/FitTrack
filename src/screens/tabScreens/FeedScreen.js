import { View, Text, StyleSheet, ScrollView } from "react-native";
import TabScreenTitle from "../../components/TabScreenTitle";

function FeedScreen() {
  return (
    
    <ScrollView style={styles.container}>

      <TabScreenTitle title={"Explore"} />

      <View style={styles.boxContainer}>
        <View style={styles.box}></View>
      </View>

    </ScrollView>
  )
}

export default FeedScreen;

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
    alignItems: "center",
    justifyContent: "flex-end",
  },
  
  PageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingLeft: 25,
    paddingBottom: 3,
  },
})