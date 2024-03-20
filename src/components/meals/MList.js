import { Text, View, StyleSheet } from "react-native";

function MList({data}) {
  return (
    data.map((dataPoint) => (
      <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ))
  )
}

export default MList;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#E1F0F4',
  },
  itemText: {
    fontFamily: 'poppins',
    color: '#272D34',
    textAlign: 'center',
  }
})