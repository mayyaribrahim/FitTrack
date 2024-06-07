import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import FavMlCategoryGrid from "../../../../components/meals/FavMlCategoryGrid";
import { MEALCATEGORIES } from "../../../../data/Data";

function FavMlHome({ navigation }) {
  const renderMealCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('FavMealsScreen', {
        mealCategoryId: itemData.item.id,
        categoryIds: itemData.item.id,
      });
    };

    return (
      <View style={styles.categoryGrid}>
        <FavMlCategoryGrid
          title={itemData.item.title}
          titleColor={itemData.item.titleColor}
          buttonColor={itemData.item.buttonColor}
          iconContainer={itemData.item.iconContainer}
          iconColor={itemData.item.iconColor}
          onPress={pressHandler}
        />
      </View>
    );
  };

  const [numColumns, setNumColumns] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MEALCATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderMealCategoryItem}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListCon}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

export default FavMlHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  categoryGrid: {
    marginBottom: 5,
  },
});
