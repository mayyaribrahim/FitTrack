import { View, Text, StyleSheet } from "react-native";

function GreyBox() {
  return (
    <View>
      <View style={styles.box}></View>
    </View>
  )
}

export default GreyBox;

const styles = StyleSheet.create({
  box: {
    width: 341,
    height: 680,
    borderRadius: 20,
    backgroundColor: "red",
  }
})