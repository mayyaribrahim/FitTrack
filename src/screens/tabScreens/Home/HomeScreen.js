import { View, Text, StyleSheet, ScrollView, FlatList, Image, Platform } from "react-native";
import ExCategoryGrid from "../../../components/ExCategoryGrid";
import { EXERCISESCATEGORIES } from "../../../data/ExercisesData";


function HomeScreen({navigation}) {
  
  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('ExercisesOverView', {
        exerciseCategoryId: itemData.item.id, 
      });
    }
  
    return (
      <View  style={styles.categoryGrid}>
        <ExCategoryGrid
        title={itemData.item.title}
        titleColor={itemData.item.titleColor}
        buttonColor={itemData.item.buttonColor}
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
        
        <Image style={styles.image} source={require("../../../assets/images/user.png")}/>
      </View>
      
        <View style={styles.Box}></View>
        
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

  Box: {
    width: 340,
    height: 161,
    borderRadius: 20,
    backgroundColor: "#E1F0F4",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 7,
    bottom: 6,
    shadowColor: "black",
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },


  PageTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: "#000",
  },

  titleContainer: {
    top: 20,
  },

  image: {
    width: 45,
    height: 45,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    bottom: 7,
  },

  
  categoryGrid: {
    left: 13,
    marginBottom: 5,
    
  },

  flatListCon: {
    paddingRight: 25,
  },
})