import { View, Text, StyleSheet, ScrollView, FlatList, Image, Platform, TouchableOpacity } from "react-native";
import ExCategoryGrid from "../../../components/ExCategoryGrid";
import { EXERCISESCATEGORIES } from "../../../data/ExercisesData";


function HomeScreen({navigation}) {
  
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
        onPress={pressHandler}
      />
      </View>
      
    );
  }

  return (
    
    <ScrollView style={styles.container}>


      <View style={styles.headerContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.PageTitle}>Hello Mayyar</Text>
        </View>
        
        <Image style={styles.userImage} source={require("../../../assets/images/user.png")}/>

      </View>
      
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

    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    bottom: 7,
  },

  PageTitle: {
    fontFamily: 'poppins',
    fontSize: 20,
    
  },

  titleContainer: {
    top: 20,
  },

  userImage: {
    width: 45,
    height: 45,
  },

  dumble: {
    width: 170,
    height: 88,
    alignSelf: 'flex-end',
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
    height: 153,
    borderRadius: 20,
    backgroundColor: "#E1F0F4",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 2,
    bottom: 6,
    shadowColor: "black",
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  secondBox: {
    width: 335,
    height: 153,
    borderRadius: 20,
    backgroundColor: "#E1F0F4",
    alignSelf: "center",
    marginTop: 45,
    marginBottom: 500,
    bottom: 6,
    shadowColor: "black",
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  boxTitle:{
    fontFamily: 'poppins-medium',
    fontSize: 40,
    color: "#272D34",
    left: 23,
    top: 20,
  },

  boxDescription: {
    fontFamily: 'poppins-light',
    fontSize: 18,
    color: "#272D34",
    left: 23,
    top: 20,
  },

  categoriesContainer: {
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  categories:{
    fontFamily: 'poppins-medium',
    fontSize: 17,
    left: 29,
  },

  viewAll:{
    fontFamily: 'poppins-medium',
    fontSize: 14,
    right: 20,
    top: 3,
  },



  
  categoryGrid: {
    left: 13,
    marginBottom: 5,
    
  },

  flatListCon: {
    paddingRight: 20,
  },
})