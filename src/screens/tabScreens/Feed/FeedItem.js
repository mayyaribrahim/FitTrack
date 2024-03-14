import { StyleSheet } from "react-native";
import { View, Text, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function FeedItem (props) {
  return (
    
    <View style={styles.tweetItem}>

      <View style={styles.userContainer}>

        <Image style={styles.userImage} source={require("../../../assets/images/user.png")}/>
        <Text style={styles.userName}>Mayyar Ibrahim</Text>

        <View style={styles.deleteButton}>
          <Pressable 
          android_ripple={{ color: '#555555' }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}>

          <Ionicons name='trash' color='#BEBEBE' size={27}/>
        </Pressable>
        </View>
      
      </View> 

      

      <Text style={styles.Text}>{props.text}</Text>
        
    </View>
  
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  tweetItem: {
    alignSelf: 'center',
    width: '89%',
    margin: 8,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#E9E9E9',
    padding: 15,
  },

  pressedItem: {
    opacity: 0.5
  },

  Text:{
    fontFamily: "poppins",
    color: 'black',
    padding: 8,
  }, 

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  userImage: {
    width: 50,
    height: 50,
  },

  userName: {
    fontFamily: "poppins",
    marginLeft: 10,
  },

  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },

});