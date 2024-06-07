import { useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import FavMlCategoryGrid from "../../../../components/meals/FavMlCategoryGrid";
import FavExCategoryGrid from "../../../../components/exercises/FavExCategoryGrid";
import { EXERCISESCATEGORIES } from "../../../../data/Data";

function FavExHome({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('FavExerciseScreen', {
        exerciseCategoryId: itemData.item.id,
      });
    }

    const item = itemData.item;

    return (
      <View style={styles.categoryGrid}>
        <FavExCategoryGrid
          title={item.title}
          titleColor={item.titleColor}
          buttonColor={item.buttonColor}
          iconContainer={item.iconContainer}
          iconColor={item.iconColor}
          onPress={pressHandler}
        />
      </View>
    );
  }

  const [numColumns, setNumColumns] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={EXERCISESCATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListCon}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

export default FavExHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  categoryGrid: {
    marginBottom: 5,
  },

  flatListCon: {
    paddingBottom: 50, // Adjust the padding here
  },
});
