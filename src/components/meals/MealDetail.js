import { Text, View, StyleSheet } from "react-native";

function MealDetail({calroies, protein, carb, fat, style, textStyle}) {
  return (
    <>
    <View style={[styles.calorieDetails, style]}>
    <Text style={[styles.detailItem, textStyle]}>Calories: {calroies} Kcal</Text>
    </View>
    
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>P: {protein}g</Text>
      <Text style={[styles.detailItem, textStyle]}>C: {carb}g</Text>
      <Text style={[styles.detailItem, textStyle]}>F: {fat}g</Text>
    </View>
    </>
    
  )
}

export default MealDetail;

const styles = StyleSheet.create({
  details:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  calorieDetails: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  detailItem: {
    fontFamily: 'poppins',
    marginHorizontal: 10,
    fontSize: 12,
  },
})