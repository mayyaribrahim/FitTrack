import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const TimerScreen = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 60000, // 60 seconds for a full rotation
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      if (intervalId.current) clearInterval(intervalId.current);
      animatedValue.stopAnimation();
    }
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    animatedValue.setValue(0);
  };

  const animatedStyle = {
    transform: [{
      rotate: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    }]
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerWrapper}>
        <Animated.View style={[styles.timerContainer, animatedStyle]} />
        <Text style={styles.timer}>{formatTime(time)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.stopButton]} onPress={handleStop}>
          <MaterialIcons name="pause" size={36} color="#FFE9CA" />
        </Pressable>
        <Pressable style={[styles.button, styles.startButton]} onPress={handleStart}>
          <MaterialIcons name="play-arrow" size={36} color="#FFE9CA" />
        </Pressable>
        <Pressable style={[styles.button, styles.resetButton]} onPress={handleReset}>
          <MaterialIcons name="refresh" size={36} color="#FFE9CA" />
        </Pressable>
      </View>
    </View>
  );
};

const formatTime = (seconds) => {
  const getMinutes = Math.floor(seconds / 60);
  const getSeconds = seconds % 60;
  return `${getMinutes < 10 ? "0" + getMinutes : getMinutes}:${
    getSeconds < 10 ? "0" + getSeconds : getSeconds
  }`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    bottom: 30,
  },
  timerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50, 
  },
  timerContainer: {
    backgroundColor: "#E1F0F4",
    borderRadius: 50,
    width: 260,
    height: 260,
    borderColor: "#272D34",
    borderWidth: 17,
    position: "absolute",
  },
  timer: {
    fontSize: 64,
    color: "#272D34",
    fontWeight: '300'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 100, 
  },
  button: {
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "#272D34",
  },
  stopButton: {
    backgroundColor: "#272D34",
  },
  resetButton: {
    backgroundColor: "#272D34",
  },
});

export default TimerScreen;
