import { React, useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated, TouchableOpacity, Text} from "react-native";
import Slides from '../../data/Slides'
import OnboardingItem from '../../components/onboarding/OnboardingItem';
import Indicator from '../../components/onboarding/Indicator';
import NextButton from '../../components/onboarding/NextButton';

const OnboardingTutorial = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }else if (currentIndex === Slides.length - 1 ) {
      navigation.navigate('home')
  };
}

  function handleTitle () {
    if (currentIndex === Slides.length - 1) {
      return "Get Started";
    } else {
      return "Next";
    }
  };

  return (
    <View style={styles.container}>

      <View style={{ flex: 2 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View style={styles.secondContainer}>
        <Indicator data={Slides} scrollX={scrollX} />
        <NextButton scrollTo={scrollTo} title={handleTitle()} />
      </View>

      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    // borderColor: "red",
    // borderWidth: 2,
  },
  secondContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  skipContainer: {
    marginBottom: 50,
    flexDirection: "row",
    paddingHorizontal: 40,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  skip: {
    color: "#625F60",
    fontSize: 14,
    fontFamily: "poppins-medium",
  },
});

export default OnboardingTutorial;