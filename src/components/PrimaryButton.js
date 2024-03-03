import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>

      <Pressable
        style={({ pressed }) =>
          pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#19498E" }}
      >
        <Text style={styles.buttonText}>{children}</Text>

      </Pressable>
      
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
    width: 300,
  },
  buttonInnerContainer: {
    backgroundColor: "#272D34",
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.80,
  },
});
