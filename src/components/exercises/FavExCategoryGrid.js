import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

function FavExCategoryGrid({ title, titleColor, buttonColor, iconContainer, iconColor, onPress }) {
  
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

          <View style={styles.icons} >
          <Ionicons name="barbell-outline" size={20} color={iconColor} />
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

export default FavExCategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 120,
    width: 340,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000000",
    shadowOpacity: 0.10,
    textShadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, 
  },
  button: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    flex: 1,
  },

  iconContainer: {
    width: 47,
    height: 47,
    borderRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    top: 17,
    right: 13,
    transform: [{ rotate: '311deg' }],
  },

  title: {
    fontFamily: 'poppins-light',
    fontSize: 25,
    
  },
});


