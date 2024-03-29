import { useLayoutEffect } from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { EXERCISES } from "../../../../data/Data";
import MSubtitle from '../../../../components/meals/MSubtitle';
import { AntDesign } from '@expo/vector-icons';

function ExDetailScreen({route, navigation}) {
  const exerciseId = route.params.exerciseId;

  const selectedExercise = EXERCISES.find((exercise) => exercise.id === exerciseId);

  function headerButtonPressHandler() {
    console.log('Pressed!');
    
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={headerButtonPressHandler}>
            <AntDesign name='star' color='#272D34' size={24}  />
          </TouchableOpacity>
          
        )
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (

    <ScrollView style={styles.rootContainer}>

      <Image style={styles.image} source={require("../../../../assets/images/default.jpg")} />

      <Text style={styles.title}>{selectedExercise.name}</Text>


      <View style={styles.listOuterContainer}>

        <View style={styles.listContainer}>

          <MSubtitle>Sets and Reps</MSubtitle>

          <View style={styles.listItem}>
            <Text style={styles.itemText}>{selectedExercise.setsAndReps}</Text>
          </View>

          <MSubtitle>equipment</MSubtitle>

          <View style={styles.listItem}>
            <Text style={styles.itemText}>{selectedExercise.equipment}</Text>
          </View>
         
        </View>

      </View>
      

    </ScrollView>
  )
}

export default ExDetailScreen;

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

  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#E1F0F4',
  },
  itemText: {
    fontFamily: 'poppins',
    color: '#272D34',
    textAlign: 'center',
  }
})