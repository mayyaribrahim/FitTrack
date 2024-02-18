import { View, Text, Pressable, StyleSheet } from 'react-native';



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
        android_ripple={{ color: '#black' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryBlack;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    width: 325,
  },
  buttonInnerContainer: {
    backgroundColor: '#292929',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    height:44,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});