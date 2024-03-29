import { useLayoutEffect, useContext } from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MealDetail from "../../../../components/meals/MealDetail";
import { MEALS } from "../../../../data/Data";
import MSubtitle from '../../../../components/meals/MSubtitle';
import MList from '../../../../components/meals/MList';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from "../../../../context/Favorites-context";

function MlDetailScreen({route, navigation}) {
  const favoriteMealsCtx = useContext((FavoritesContext));

  const mealId = route.params.mealId;

  

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)    
    } 
    
    else {
      favoriteMealsCtx.addFavorite(mealId);
      
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={changeFavoritesStatusHandler}>
            <AntDesign name='star' color={mealIsFavorite ? '#ffb700': 'black'} size={24}  />
          </TouchableOpacity>
          
        )
      }
    })
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>

      <Image style={styles.image} source={require("../../../../assets/images/default.jpg")} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      
      <MealDetail 
        calroies={selectedMeal.calories} 
        protein={selectedMeal.protein} 
        carb={selectedMeal.carb} 
        fat={selectedMeal.fat}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>

        <View style={styles.listContainer}>
          <MSubtitle>Ingrediants</MSubtitle>
          <MList data={selectedMeal.ingredients}/>
          <MSubtitle>Steps</MSubtitle>
          <MList data={selectedMeal.steps}/>
        </View>

      </View>
      

    </ScrollView>
  )
}

export default MlDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#FFFFFF', 
    marginBottom: 35,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: 'poppins-medium',
    fontSize: 22,
    margin: 8,
    textAlign: 'center',
    color: '#272D34',
  }, 
  detailText: {
    color: '#272D34',
    fontFamily: 'poppins',
    fontSize: 14,
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})