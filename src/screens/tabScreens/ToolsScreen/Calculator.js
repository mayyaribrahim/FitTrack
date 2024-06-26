import { doc, collection, addDoc, updateDoc, getDocs, getDoc } from 'firebase/firestore';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import InputField from "../../../components/InputFeild";
import ShortInput from "../../../components/ShortInput";
import DropDown from "../../../components/DropDown";
import TrainDropDown from "../../../components/TrainDropDown";
import { calculateMacros } from "../../../hooks/calculateMarcos";
import { getAuth } from 'firebase/auth';

function Calculator({ navigation }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [fat, setFat] = useState(null);
  const [calories, setCalories] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user) {
          const uid = user.uid;
          const userDocRef = doc(FIRESTORE_DB, 'users', uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setAge(userData.age || '');
            setHeight(userData.height || '');
            setWeight(userData.weight || '');
          } else {
            console.log("No such document!");
          }
        } else {
          console.error("No user is currently signed in.");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  const handleHeightChange = (enteredHeight) => {
    setHeight(enteredHeight);
  };

  const handleWeightChange = (enteredWeight) => {
    setWeight(enteredWeight);
  };

  const handleAgeChange = (enteredAge) => {
    setAge(enteredAge);
  };

  function addDayHandler(trainDay) {
    setSelectedDay(trainDay);
  }

  function addGoalHandler(goal) {
    setSelectedGoal(goal);
  }

  async function handleCalculatePress() {
    if (!selectedGoal || !selectedDay || !height || !weight || !age) {
      Alert.alert("Missing Information", "Please fill in all the fields.");
    } else {
      const { calories, protein, carbs, fat } = calculateMacros(height, weight, age, selectedGoal, selectedDay);
      setProtein(protein);
      setCarbs(carbs);
      setFat(fat);
      setCalories(calories);
      setShowModal(true);

      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const uid = user.uid;
          const userDocRef = doc(FIRESTORE_DB, 'users', uid);
          const macrosCollectionRef = collection(userDocRef, 'macros');
          const querySnapshot = await getDocs(macrosCollectionRef);

          if (!querySnapshot.empty) {
            const macrosDocRef = querySnapshot.docs[0].ref;
            await updateDoc(macrosDocRef, {
              calories: calories,
              protein: protein,
              carbs: carbs,
              fat: fat
            });
          } else {
            await addDoc(macrosCollectionRef, {
              calories: calories,
              protein: protein,
              carbs: carbs,
              fat: fat
            });
          }

          console.log("Calculated macros saved successfully for UID: ", uid);
        } else {
          console.error("No user is currently signed in.");
        }
      } catch (error) {
        console.error("Error saving calculated macros: ", error);
      }
    }
  }

  function doneButton() {
    setShowModal(false);
    navigation.navigate("macros");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.ShortInputContainer}>
          <ShortInput
            secondIconName={"ruler"}
            placeholder={"Height"}
            keyboardType="numeric"
            value={height}
            onChange={handleHeightChange}
          />
          <ShortInput
            secondIconName={"weight-scale"}
            placeholder={"Weight"}
            keyboardType="numeric"
            value={weight}
            onChange={handleWeightChange}
          />
        </View>
        <InputField
          iconName={"calendar"}
          placeholder={"Age"}
          keyboardType="numeric"
          value={age}
          onChange={handleAgeChange}
        />
      </View>

      <View style={styles.dropDownContainer}>
        <TrainDropDown onAddDay={addDayHandler} />
      </View>

      <View>
        <DropDown onAddGoal={addGoalHandler} />
      </View>

      <View style={styles.primaryButton}>
        <PrimaryButton onPress={handleCalculatePress}>
          Calculate
        </PrimaryButton>
      </View>

      {protein !== null || carbs !== null || fat !== null || calories !== null ? (
        <Modal visible={showModal} animationType="fade" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Your Macros</Text>
              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Calories: </Text>
                <Text style={styles.result}>{calories}</Text>
              </View>
              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Protein: </Text>
                <Text style={styles.result}>{protein}g</Text>
              </View>
              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Carbs: </Text>
                <Text style={styles.result}>{carbs}g</Text>
              </View>
              <View style={styles.eachResult}>
                <Text style={styles.resultTitle}>Fat: </Text>
                <Text style={styles.result}>{fat}g</Text>
              </View>
              <TouchableOpacity style={styles.doneButton} onPress={doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  );
}

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'flex-start',
  },
  inputContainer: {
    marginBottom: 30,
    marginTop: 30,
    alignItems: "center",
  },
  ShortInputContainer: {
    flexDirection: 'row',
    right: 4,
  },
  pickerContainer: {
    bottom: 30,
  },
  dropDownContainer: {
    bottom: 20,
  },
  primaryButton: {
    alignItems: "center",
    marginTop: 20,
  },
  resultsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 22,
    color: '#272D34',
    marginBottom: 15,
  },
  eachResult: {
    flexDirection: "row",
    alignItems: "center",
    width: '90%',
    justifyContent: "space-between",
    marginBottom: 10,
  },
  resultTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 20,
    color: '#272D34',
  },
  result: {
    fontFamily: 'poppins',
    fontSize: 18,
    color: '#272D34',
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#272D34',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
