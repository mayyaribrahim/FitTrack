import { StyleSheet, View, FlatList } from "react-native";

import ExerciseItem from "./ExerciseItem";

function ExercisesList({items}) {
  function RenderExerciseItem(itemData) {
    const item = itemData.item;

    const exerciseItemProps = {
      id: item.id,
      categoryIds: item.categoryIds,
      imageUrl: item.imageUrl,
      name: item.name,
      setsAndReps: item.setsAndReps,
      equipment: item.equipment,
    } 

    return  (
      <ExerciseItem {...exerciseItemProps} />
    )
  }

  return (
    <View style={styles.container}>

      <FlatList 
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={RenderExerciseItem}
      showsVerticalScrollIndicator={false}
      />

    </View>
  )

}

export default ExercisesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
