import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


function ExCategoryGrid({ title, titleColor, buttonColor ,onPress }) {
  
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
    marginRight: 7,
    height: 173,
    width: 145,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.30,
    textShadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, 
  },
  button: {
    flex: 1,
    borderRadius: 20,
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
    left: 4,
  },

  innerContainer: {
    flex: 1,
  },

  title: {
    fontFamily: 'poppins-extralight',
    fontSize: 23,
    fontWeight: '300'
  },
});
