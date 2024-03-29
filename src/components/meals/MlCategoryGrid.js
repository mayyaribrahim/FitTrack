import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

function MlCategoryGrid({ title, titleColor, buttonColor, iconContainer, iconColor, onPress }) {
  
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
          <Ionicons name="restaurant" size={20} color={iconColor} />
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

export default MlCategoryGrid;

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
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    bottom: 10,
    left: 2,
  },

  innerContainer: {
    flex: 1,
  },

  iconContainer: {
    width: 47,
    height: 47,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 16,
    left: 33,
  },

  title: {
    fontFamily: 'poppins-light',
    fontSize: 20,
    
  },
});
