import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

function MealItem({ id, title, calories, protein, carb, fat}) {
  const navigation = useNavigation();


  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
   mealId: id
   });
  }
  

  return (

    <View style={styles.mealItem}>

      <Pressable 
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
          onPress={selectMealItemHandler}
        >

          <View style={styles.innerContainer}>
          
            <View>
              <Image source={require("../../assets/images/default.jpg")} style={styles.image}/>
              <Text style={styles.title}>{title}</Text>
            </View>

            <MealDetail calroies={calories} protein={protein} carb={carb} fat={fat}/>
  
          </View>

        </Pressable>

    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  }, 
  title: {
    fontFamily: 'poppins',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
 
})