import { doc, collection, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";
import LoadingOverlay from '../../../components/LoadingOverlay';

function ToolsScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [macrosData, setMacrosData] = useState([]); // State variable to store macros data

  useEffect(() => {
    const fetchMacrosData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const uid = user.uid;

          // Reference to the user's document
          const userDocRef = doc(FIRESTORE_DB, 'users', uid);

          // Reference to the "macros" subcollection inside the user's document
          const macrosCollectionRef = collection(userDocRef, 'macros');

          // Listen for real-time updates
          const unsubscribe = onSnapshot(macrosCollectionRef, (querySnapshot) => {
            const macrosDataArray = [];
            querySnapshot.forEach((doc) => {
              macrosDataArray.push(doc.data());
            });
            setMacrosData(macrosDataArray);
            setLoading(false);
          });

          // Cleanup subscription on unmount
          return unsubscribe;
        } else {
          console.log("No user is currently signed in.");
          setLoading(false);
        }
      } catch (error) {
        console.log("Error fetching macros data: ", error);
        setLoading(false);
      }
    };

    fetchMacrosData();
  }, []); // Remove macrosData from the dependency array

  if (loading) {
    return <LoadingOverlay message="Loading..." />;
  }

  const renderMacroItem = (label, value, color, icon) => (
    <View style={[styles.macrosContainer, { backgroundColor: color }]}>
      <Text style={styles.label}>
        {label}: {value}
      </Text>
      <FontAwesome5 name={icon} size={24} color={'#272D34'} style={styles.icon} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenTitle title="Tools" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {macrosData.map((macrosItem, index) => (
          <View key={index} style={styles.macrosItemContainer}>
            {renderMacroItem('Calories', macrosItem.calories, '#E1F0F4', 'fire')}
            {renderMacroItem('Protein', macrosItem.protein, '#FFE9CA', 'drumstick-bite')}
            {renderMacroItem('Carbs', macrosItem.carbs, '#E1F0F4', 'bread-slice')}
            {renderMacroItem('Fat', macrosItem.fat, '#FFE9CA', 'bacon')}
          </View>
        ))}

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => navigation.navigate('Macros Calculator')}>Calculate</PrimaryButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  macrosItemContainer: {
    width: '100%',
    alignItems: 'center',
  },
  macrosContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 15,
  },
  label: {
    fontSize: 22,
    fontFamily: 'poppins',
    color: '#272D34',
  },
  
  buttonContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
});
