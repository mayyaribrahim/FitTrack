import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      calories: item.calories,
      protein: item.protein,
      carb: item.carb,
      fat: item.fat,
      categoryIds: item.categoryIds,
    }
    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>

      <FlatList 
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />

    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
