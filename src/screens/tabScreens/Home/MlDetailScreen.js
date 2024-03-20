import { useLayoutEffect } from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import MealDetail from "../../../components/meals/MealDetail";
import { MEALS } from "../../../data/Data";
import MSubtitle from '../../../components/meals/MSubtitle';
import MList from '../../../components/meals/MList';
import { FontAwesome6 } from "@expo/vector-icons";


function MlDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <FontAwesome6 name='star' color='white' onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>

      <Image style={styles.image} source={require("../../../assets/images/default.jpg")} />

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