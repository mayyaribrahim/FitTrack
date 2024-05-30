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
    <View style={styles.tweetItem}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Exercise: {name}</Text>
        <View style={styles.deleteButton}>
          <Pressable
            android_ripple={{ color: '#555555' }}
            onPress={handleDelete}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <Ionicons name='close-circle' color='#FFFF' size={27} />
          </Pressable>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.sets}>Sets & Reps: {reps}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.weight}>Max wieght {weight}</Text>
      </View>
    </View>
  );
}

export default TrackItem;

const styles = StyleSheet.create({
  tweetItem: {
    alignSelf: 'center',
    width: '89%',
    margin: 8,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#272D34',
    paddingVertical: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    backgroundColor: '#22272c',
    borderRadius: 10,
    width: '100%',
    marginBottom: 5,
  },
  name: {
    color: '#FFFF',
    fontFamily: "poppins-medium",
    fontSize: 20,
    marginLeft: 12,
  },
  sets: {
    color: '#FFFF',
    fontFamily: "poppins-medium",
    fontSize: 13,
    marginLeft: 12,
  },
  weight: {
    color: '#FFFF',
    fontFamily: "poppins-medium",
    fontSize: 13,
    marginLeft: 12,
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
    right: 7,
  },
});
