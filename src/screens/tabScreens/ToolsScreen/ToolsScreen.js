import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import PrimaryButton from "../../../components/PrimaryButton";
import LoadingOverlay from '../../../components/LoadingOverlay';


function ToolsScreen({navigation}) {
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
  
          // Fetch all documents from the "macros" subcollection
          const querySnapshot = await getDocs(macrosCollectionRef);
          
          // Extract data from each document and store it in an array
          const macrosDataArray = [];
          querySnapshot.forEach((doc) => {
            macrosDataArray.push(doc.data());
          });
  
          // Set the fetched data in state
          setMacrosData(macrosDataArray);
          setLoading(false);
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
  }, [macrosData]);

  if (loading) {
    return <LoadingOverlay message="Loading..." />;
  }

  return (
    
    <SafeAreaView style={styles.container}>

      <TabScreenTitle title={"Tools"} />

      <View style={styles.buttonsContainer}>

        <PrimaryButton onPress={() => navigation.navigate('Macros Calculator')}>Macros Calculator</PrimaryButton>

        {macrosData.map((macrosItem, index) => (
          <View key={index} style={styles.macrosItemContainer}>
            <Text>Calories: {macrosItem.calories}</Text>
            <Text>Protein: {macrosItem.protein}</Text>
            <Text>Carbs: {macrosItem.carbs}</Text>
            <Text>Fat: {macrosItem.fat}</Text>
          </View>
        ))}

      </View>

    </SafeAreaView>
  )
}

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
  },

  primaryButton: {
    marginBottom: 3,
  },

  buttonsContainer: {
    marginTop: 50,
  },
})