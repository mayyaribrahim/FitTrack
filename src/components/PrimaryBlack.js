import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryBlack({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#869ba0" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryBlack;

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
    width: 297,
    alignSelf: "center",
  },

  buttonInnerContainer: {
    backgroundColor: "#E1F0F4",
    height: 50,
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: "#272D34",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.80,
  },
});
