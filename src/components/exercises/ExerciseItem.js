import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ExerciseItem({id, name}) {
  const navigation = useNavigation();

  function selectExerciseItemHandler() {
    navigation.navigate('ExerciseDetail', {
    exerciseId: id
    });
  }

  return (

    <View style={styles.exerciseItem}>

      <Pressable 
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
          onPress={selectExerciseItemHandler}
        >

          <View style={styles.innerContainer}>
          
            <View>
              <Image source={require("../../assets/images/default.jpg")} style={styles.image}/>
              <Text style={styles.title}>{name}</Text>
            </View>
  
          </View>

        </Pressable>

    </View>
  )
  
} 

export default  ExerciseItem;

const styles = StyleSheet.create({
  exerciseItem: {
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