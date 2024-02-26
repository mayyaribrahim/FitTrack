import { View, Text, StyleSheet } from "react-native";
import GreyBox from "../../components/GreyBox";
import { SafeAreaView } from "react-native-safe-area-context";

function FeedScreen() {
  return (
    
    <View style={styles.container}>

      <View style={styles.TitleContainer}>
        <Text style={styles.PageTitle}>Feed</Text>
      </View>

      <View>
      <View style={styles.box}></View>
    </View>

    </View>
  )
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 341,
    height: 680,
    borderRadius: 20,
    backgroundColor: "red",
  },
  TitleContainer: {
    alignItems: 'flex-start',
  },
  PageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
  },
})