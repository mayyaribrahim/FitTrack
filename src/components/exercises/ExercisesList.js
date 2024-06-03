import { StyleSheet, View, FlatList } from "react-native";

import ExerciseItem from "./ExerciseItem";

function ExercisesList({items}) {
  function RenderExerciseItem({item}) {
    return  (
      <ExerciseItem exercise={item} />
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
    backgroundColor: '#272D34',
  },
});
