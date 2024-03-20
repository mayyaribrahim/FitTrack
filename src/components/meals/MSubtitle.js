import { View, Text, StyleSheet } from "react-native";

function MSubtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

export default MSubtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#272D34',
    fontSize: 18,
    fontFamily: 'poppins',
    textAlign: 'center',
  }, 
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginBottom: 6,
    marginTop: 20,
    borderBottomColor: '#272D34',
    borderBottomWidth: 2,
  },
});