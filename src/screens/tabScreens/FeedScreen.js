import { View, Text, StyleSheet, ScrollView } from "react-native";
import TabScreenTitle from "../../components/TabScreenTitle";

function FeedScreen() {
  return (
    
    <ScrollView style={styles.container}>

      <TabScreenTitle title={"Explore"} />

      <View style={styles.container}>
        
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

  PageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingLeft: 25,
    paddingBottom: 3,
  },
})