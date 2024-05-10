import {View, Text, TouchableOpacity, Image, TextInput, FlatList, Platform} from 'react-native';
import React, {useRef, useState} from 'react';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';


const trainingDays = [
  {trainDay: 'little to no exercise',},
  {trainDay: 'Exercise 1-3 times/week',},
  {trainDay: 'Exercise 4-5 times/week',},
  {trainDay: 'Exercise 6-7 times/week',},
];
const TrainDropDown = ({onAddDay}) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(trainingDays);
  const [selectedDay, setSelectedDay] = useState('');

  const handleDaysSelection = (trainDay) => {
    setSelectedDay(trainDay);
    setClicked(false); // Close dropdown after selection
    onAddDay(trainDay); // Call onAddGoal after updating the selected goal
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
      
        <Text style={{ color: selectedDay !== '' ? 'black' : '#BEBEBE', fontFamily: 'poppins', fontSize: 15}}>
          {selectedDay == '' ? 'Training Days' : selectedDay}
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
                  onPress={() => handleDaysSelection(item.trainDay)}>
                  <Text style={{color: '#7c7c7c', fontFamily: 'poppins'}}>{item.trainDay}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default TrainDropDown;