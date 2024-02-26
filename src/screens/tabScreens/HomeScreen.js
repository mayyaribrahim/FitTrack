import { View, Text, StyleSheet, ScrollView, FlatList, Image } from "react-native";
import ExCategoryGrid from "../../components/ExCategoryGrid";
import { CATEGORIES } from "../../data/ButtonsData";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  function renderCategoryItem(itemData) {

    function pressHandler() {
      //navigation.navigate('MealsOverview', {
        //categoryId: itemData.item.id, 
      //});
    }
  
    return (
      <ExCategoryGrid
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  }


  return (
    
    <ScrollView style={styles.container}>


      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.PageTitle}>Hello Mayyar</Text>
        </View>
        
        <Image style={styles.image} source={require("../../assets/images/user.png")}/>
      </View>
      
      <View style={styles.boxContainer}>

        <View style={styles.box}>

          <View style={styles.blueBoxContainer}>
            <View style={styles.blueBox}></View>
          </View>

          <View style={styles.gridContainer}>
            <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item.id}
              renderItem={renderCategoryItem}
              numColumns={2}
              scrollEnabled = {false}
            />
          </View>

        </View>

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

  box: {
    width: 345,
    height: 677,
    borderRadius: 20,
    backgroundColor: "#EAEAEA", 
  },

 boxContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  blueBox: {
    width: 320,
    height: 120,
    borderRadius: 20,
    backgroundColor: "#246CD3",
  },

  blueBoxContainer: {
    alignItems: 'center',
    marginTop: 20,
    bottom: 6,
  },

  PageTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
   // borderWidth: 1,
   // borderColor: 'red',
    bottom: 7,
  },

  gridContainer: {
    margin: 10,
    bottom: 9,
  }
})