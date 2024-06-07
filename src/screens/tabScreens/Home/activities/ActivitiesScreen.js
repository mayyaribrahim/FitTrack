import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import MSubtitle from "../../../../components/meals/MSubtitle";
import { ACTIVITIES } from "../../../../data/Data"; 

const ActivitesScreen = ({ route }) => {
  const { activity } = route.params;

  // Function to render benefits with bold text before the colon
  const renderBenefits = (benefits) => {
    return benefits.split('\n').map((line, index) => {
      const [boldPart, regularPart] = line.split(':');
      return (
        <Text key={index} style={styles.secondItemText}>
          <Text style={styles.boldText}>{boldPart}</Text>
          {regularPart}
          
        </Text>
      );
    });
  };

  return (
    <View>
      <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{activity?.title || "loading"}</Text>
        <YoutubeIframe  
           height={200}
           play={false}
           videoId={activity.videoId}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <MSubtitle>What is {activity.title}</MSubtitle>
            <View style={styles.listItem}>
              <Text style={styles.itemText}>{activity.explanation}</Text>
            </View>
            <MSubtitle>Benefits</MSubtitle>
            <View style={styles.listItem}>
              {renderBenefits(activity.benefits)}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ActivitesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 35,
  },
  title: {
    fontFamily: 'poppins-medium',
    fontSize: 22,
    bottom: 6,
    marginBottom: 6,
    textAlign: 'center',
    color: '#272D34',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 4,
    backgroundColor: '#E1F0F4',
  },
  itemText: {
    fontFamily: 'poppins',
    color: '#272D34',
    textAlign: 'left',
  },
  secondItemText: {
    fontFamily: 'poppins',
    color: '#272D34',
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
  }
});
