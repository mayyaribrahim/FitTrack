import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { doc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import ExCategoryGrid from "../../../components/exercises/ExCategoryGrid";
import MlCategoryGrid from "../../../components/meals/MlCategoryGrid";
import AcCategoryGrid from "../../../components/AcCategoryGrid";
import { EXERCISESCATEGORIES, MEALCATEGORIES, ACTIVITIESCATEGORIES, ACTIVITIES } from "../../../data/Data";
import LoadingOverlay from '../../../components/LoadingOverlay';

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;

      const userDocRef = doc(FIRESTORE_DB, 'users', uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setFirstName(userData.firstName);
          setProfileImage(userData.profileImage);
          setLoading(false);
        } else {
          console.log("User document does not exist.");
        }
      });

      return () => unsubscribe();
    } else {
      console.log("No user is currently signed in.");
    }
  }, []);

  if (loading) {
    return <LoadingOverlay message="Welcome to FitTrack" />;
  }

  //===================== for Meals =================================================
  function renderMealCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsScreen', {
        mealCategoryId: itemData.item.id,
      });
    }

    const item = itemData.item;

    return (
      <View style={styles.categoryGrid}>
        <MlCategoryGrid
          title={item.title}
          titleColor={item.titleColor}
          buttonColor={item.buttonColor}
          iconContainer={item.iconContainer}
          iconColor={item.iconColor}
          onPress={pressHandler}
        />
      </View>
    );
  }

  //===================== for exercises =================================================
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('ExercisesScreen', {
        exerciseCategoryId: itemData.item.id,
      });
    }

    const item = itemData.item;

    return (
      <View style={styles.categoryGrid}>
        <ExCategoryGrid
          title={item.title}
          titleColor={item.titleColor}
          buttonColor={item.buttonColor}
          iconContainer={item.iconContainer}
          iconColor={item.iconColor}
          onPress={pressHandler}
        />
      </View>
    );
  }

  //===================== for Activities =================================================
  function renderActivityCategoryItem(itemData) {
    function pressHandler() {
      const selectedActivity = ACTIVITIES.find(activity => activity.id === itemData.item.id);
      navigation.navigate('ActivitesScreen', {
        activity: selectedActivity,
      });
    }

    const item = itemData.item;

    return (
      <View style={styles.categoryGrid}>
        <AcCategoryGrid
          title={item.title}
          titleColor={item.titleColor}
          buttonColor={item.buttonColor}
          iconContainer={item.iconContainer}
          iconColor={item.iconColor}
          image={item.image}
          onPress={pressHandler}
        />
      </View>
    );
  }

  //===================== Main return =================================================
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollcontainer} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.PageTitle}>Hello {firstName}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Personal Information')}>
            <Image
              style={styles.userImage}
              source={profileImage ? { uri: profileImage } : require("../../../assets/images/user.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Exercises</Text>
          <Text style={styles.boxDescription}>all the exercises {'\n'}you need</Text>
          <Image style={styles.dumble} source={require("../../../assets/images/dumble.png")} />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categories}>categories</Text>
        </View>

        <FlatList
          data={EXERCISESCATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={1}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListCon}
        />

        <View style={styles.secondBox}>
          <Text style={styles.boxTitle}>Meal Plans</Text>
          <Text style={styles.boxDescription}>all the Meals you{'\n'}need</Text>
          <Image style={styles.veg} source={require("../../../assets/images/veg.png")} />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categories}>categories</Text>
        </View>

        <FlatList
          data={MEALCATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderMealCategoryItem}
          numColumns={1}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListCon}
        />

        <View style={styles.box}>
          <Text style={[styles.boxTitle, { color: 'black' }]}>Activites</Text>
          <Text style={[styles.boxDescription, { color: 'black' }]}>Discover new {'\n'}activities</Text>
          <Image style={styles.train} source={require("../../../assets/images/train.png")} />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categories}>categories</Text>
        </View>

        <FlatList
          data={ACTIVITIESCATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderActivityCategoryItem}
          numColumns={1}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListCon}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollcontainer: {
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 78, 
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 25,
  },
  PageTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: 20,
    left: 18,
  },
  titleContainer: {
    top: 20,
    left: 4,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  dumble: {
    width: 145,
    height: 88,
    alignSelf: 'flex-end',
    resizeMode: "contain",
    bottom: 60,
    transform: [{ rotate: '311deg' }],
    left: 15,
  },
  veg: {
    width: 130,
    height: 140,
    alignSelf: 'flex-end',
    resizeMode: "contain",
    left: 7,
    bottom: 80,
  },
  train: {
    width: 220,
    height: 220,
    alignSelf: 'flex-end',
    resizeMode: "contain",
    left: 7,
    bottom: 110,
  },
  box: {
    width: 335,
    height: 160,
    borderRadius: 27,
    backgroundColor: "#E1F0F4",
    alignSelf: "center",
    marginTop: 22,
    bottom: 6,
  },
  secondBox: {
    width: 335,
    height: 160,
    borderRadius: 27,
    backgroundColor: "#fef1e0",
    alignSelf: "center",
    marginTop: 28,
    bottom: 6,
  },
  thirdBox: {
    width: 335,
    height: 160,
    borderRadius: 27,
    backgroundColor: "#272D34",
    alignSelf: "center",
    marginTop: 45,
    bottom: 6,
  },
  boxTitle: {
    fontFamily: 'poppins-medium',
    fontSize: 40,
    color: "#272D34",
    left: 23,
    top: 27,
  },
  boxDescription: {
    fontFamily: 'poppins-light',
    fontSize: 16,
    color: "#272D34",
    left: 23,
    top: 25,
  },
  categoriesContainer: {
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  categories: {
    fontFamily: 'poppins-medium',
    fontSize: 20,
    left: 26,
  },
  viewAll: {
    fontFamily: 'poppins-medium',
    fontSize: 14,
    right: 26,
    top: 3,
  },
  categoryGrid: {
    left: 16,
    marginBottom: 5,
  },
  flatListCon: {
    paddingRight: 35,
  },
});
