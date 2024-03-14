import { View, Text, StyleSheet, ScrollView, FlatList, Image, Platform, TouchableOpacity, SafeAreaView } from "react-native";
import ExCategoryGrid from "../../../components/ExCategoryGrid";
import MlCategoryGrid from "../../../components/MlCategoryGrid";
import { EXERCISESCATEGORIES, MEALCATEGORIES } from "../../../data/ExercisesData";


function HomeScreen({navigation, route}) {

  const { email } = route.params || { email: 'default@email.com' };


  function renderMealCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('MealOverView', {
        mealCategoryId: itemData.item.id, 
      });
    }

    const item = itemData.item;
  
    return (
      <View  style={styles.categoryGrid}>
        <MlCategoryGrid
        title={item.title}
        titleColor={item.titleColor}
        buttonColor={item.buttonColor}
        iconContainer= {item.iconContainer}
        iconColor={item.iconColor}
        onPress={pressHandler}
      />
      </View>
      
    );
  }
  
  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('ExercisesOverView', {
        exerciseCategoryId: itemData.item.id, 
      });
    }

    const item = itemData.item;
  
    return (
      <View  style={styles.categoryGrid}>
        <ExCategoryGrid
        title={item.title}
        titleColor={item.titleColor}
        buttonColor={item.buttonColor}
        iconContainer= {item.iconContainer}
        iconColor={item.iconColor}
        onPress={pressHandler}
      />
      </View>
      
    );
  }

  return (
  <SafeAreaView  style={styles.container} >

    <View style={styles.headerContainer}>

      <View style={styles.titleContainer}>
        <Text style={styles.PageTitle}>Hello {email}</Text>
      </View>
        
      <Image style={styles.userImage} source={require("../../../assets/images/user.png")}/>

    </View>


    <ScrollView style={styles.scrollcontainer} showsVerticalScrollIndicator={false}>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Exercises</Text>
        <Text style={styles.boxDescription}>all the exercises {'\n'}you need</Text>
        <Image style={styles.dumble} source={require("../../../assets/images/dumble.png")}/>
      </View>

      <View style={styles.categoriesContainer}>

        <Text style={styles.categories}>categories</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>

      </View>
        
      <FlatList
        data={EXERCISESCATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={1}
        horizontal
        scrollEnabled = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListCon}
      />

      <View style={styles.secondBox}>
        <Text style={styles.boxTitle}>Meal Plans</Text>
        <Text style={styles.boxDescription}>all the Meals you{'\n'}need</Text>
        <Image style={styles.veg} source={require("../../../assets/images/veg.png")}/>
      </View>

      <View style={styles.categoriesContainer}>

        <Text style={styles.categories}>categories</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={MEALCATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderMealCategoryItem}
        numColumns={1}
        horizontal
        scrollEnabled = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListCon}
      />

      <View style={{marginBottom: 100}}>

      </View>

    </ScrollView>

  </SafeAreaView>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scrollcontainer: {
    backgroundColor: "#fff",
    paddingTop: 5,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 25,
    marginBottom: 10,
    top: 4,
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
    width: 45,
    height: 45,
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
    marginTop: 45,
    bottom: 6,
  },

  boxTitle:{
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

  categories:{
    fontFamily: 'poppins-medium',
    fontSize: 20,
    left: 26,
  },

  viewAll:{
    
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
})