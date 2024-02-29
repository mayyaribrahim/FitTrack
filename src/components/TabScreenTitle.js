import { Text, StyleSheet, View } from "react-native";

function TabScreenTitle ({title}) {
return (

  <View style={styles.TitleContainer}>
    <Text style={styles.PageTitle}>{title}</Text>
  </View>
  
)
}

export default TabScreenTitle;

const styles = StyleSheet.create({
  PageTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    paddingBottom: 3,
  },
  TitleContainer: {
    alignItems: 'flex-start',
    paddingLeft: 25, 
  }
})