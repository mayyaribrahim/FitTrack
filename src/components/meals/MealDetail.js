import { Text, View, StyleSheet } from "react-native";

function MealDetail({ style, textStyle, meal}) {
  return (
    <>
    <View style={[styles.calorieDetails, style]}>
    <Text style={[styles.detailItem, textStyle]}>Calories: {meal.calories} Kcal</Text>
    </View>
    
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>P: {meal.protein}g</Text>
      <Text style={[styles.detailItem, textStyle]}>C: {meal.carb}g</Text>
      <Text style={[styles.detailItem, textStyle]}>F: {meal.fat}g</Text>
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