import { useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import FavMlCategoryGrid from "../../../../components/meals/FavMlCategoryGrid";
import {MEALCATEGORIES } from "../../../../data/Data";




function FavMlHome({ navigation }) {
  

  function renderMealCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('FavMealsScreen', {
        mealCategoryId: itemData.item.id, 
      });
    }

    const item = itemData.item;

    return (
      <View  style={styles.categoryGrid}>
        <FavMlCategoryGrid
        title={item.title}
        titleColor={item.titleColor}
        buttonColor={item.buttonColor}
        iconContainer= {item.iconContainer}
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
        data={MEALCATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderMealCategoryItem}
        numColumns={numColumns}
        scrollEnabled = {false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListCon}
        style={styles.flatList}
      />

    </SafeAreaView>
  )
}

export default FavMlHome;

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

})