import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import {  FontAwesome6 } from "@expo/vector-icons";

function ExCategoryGrid({ title, titleColor, buttonColor, iconContainer, onPress }) {
  
  return (
   <View style={styles.gridItem}>

      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          {backgroundColor: buttonColor},
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >

        <View style={[styles.iconContainer, {backgroundColor: iconContainer}]}>
          <View>
            <FontAwesome6 name='dumbbell' size={20} color="#BEBEBE"/>
          </View>
        </View>

        <View style={styles.innerContainer}>

          <View style={styles.textContainer}>
            <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
          </View>

        </View>
        
        
      </Pressable>
    </View>
  );
}

export default ExCategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    marginRight: 11,
    height: 160,
    width: 133,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000000",
    shadowOpacity: 0.20,
    textShadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, 
  },
  button: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.9,
  },

  textContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    bottom: 10,
    left: 4,
  },

  innerContainer: {
    flex: 1,
  },

  iconContainer: {
    
    width: 47,
    height: 47,
    borderRadius: 30,
    alignSelf: 'center',
    top: 16,
    left: 33,
  },

  title: {
    fontFamily: 'poppins-light',
    fontSize: 20,
    fontWeight: '300'
  },
});
