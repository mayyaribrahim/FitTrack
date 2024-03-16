import {View, Text, TouchableOpacity, Image, TextInput, FlatList, Platform} from 'react-native';
import React, {useRef, useState} from 'react';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';


const goals = [
  {goal: 'Weight Maintain',},
  {goal: 'Weight Loss',},
  {goal: 'Weight Gain',},
];
const DropDown = ({onAddGoal}) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(goals);
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    setClicked(false); // Close dropdown after selection
    onAddGoal(goal); // Call onAddGoal after updating the selected goal
  };


  return (
    <View >

      <TouchableOpacity
        style={{
          position: 'relative',
          width: '80%',
          height: 50,
          borderRadius: 7,
          backgroundColor: "#E9E9E9",
          alignSelf: 'center',
          flexDirection: 'row',
          gap: 7,
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          shadowColor: "black",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 3 }, 
          elevation: 4,
          overflow: Platform.OS === "android" ? "hidden" : "visible",
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        
        <View style={{ right:3}}>
           <FontAwesome6 name='bullseye' size={20} color="#BEBEBE" />
        </View>
      
        <Text style={{fontWeight:'600', color: selectedGoal !== '' ? 'black' : '#BEBEBE', fontFamily: 'poppins', fontSize: 15}}>
          {selectedGoal == '' ? 'Goal' : selectedGoal}
        </Text>
        
        <View style={{position: 'absolute', right: 12}}>
          {clicked ? (
          <Ionicons name='chevron-up-outline' color='#BEBEBE' size={24}/>
        ) : (

          <Ionicons name='chevron-down-outline' color='#BEBEBE' size={24}/>
        )}
        </View>
        

      </TouchableOpacity>

      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 160,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#E9E9E9',
            borderRadius: 10,
          }}>
          

          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => handleGoalSelection(item.goal)}>
                  <Text style={{fontWeight: '600', color: '#7c7c7c', fontFamily: 'poppins'}}>{item.goal}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropDown;