import { StyleSheet } from "react-native";
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

function TrackItem({ id, name, reps, weight }) {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const handleDelete = async () => {
    if (currentUser) {
      const uid = currentUser.uid;
      const docRef = doc(FIRESTORE_DB, `users/${uid}/progress`, id);
      try {
        await deleteDoc(docRef);
        // No need to manually update the state here, onSnapshot in TrackScreen will handle it.
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Pressable
          android_ripple={{ color: '#ddd' }}
          onPress={handleDelete}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Ionicons name='trash-outline' color='#fff' size={24} />
        </Pressable>
      </View>
      <View style={styles.detailContainer}>
        <Ionicons name="repeat-outline" color="#fff" size={20} />
        <Text style={styles.detailText}>Sets & Reps: {reps}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Ionicons name="barbell-outline" color="#fff" size={20} />
        <Text style={styles.detailText}>Max Weight: {weight}</Text>
      </View>
    </View>
  );
}

export default TrackItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#272D34',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  pressedItem: {
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#FFF',
    fontFamily: 'poppins-semibold',
    fontSize: 18,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailText: {
    color: '#DDD',
    fontFamily: 'poppins',
    fontSize: 14,
    marginLeft: 8,
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
    right: 7,
  },
});
