import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CircleButton from "./CircleButton";

type Props = {
  onPress: () => void;
};

export default function BouncingCircleButton({ onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const bounce = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    bounce.start();

    // Cleanup on unmount
    return () => bounce.stop();
  }, []);

  return (
    <Animated.View style={[
      styles.circleButtonContainer,
      { transform: [{ scale }] }
    ]}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialCommunityIcons name="emoticon-outline" size={38} color="#25292e" />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 50,
    height: 50,
    marginLeft: -30,
    borderWidth: 2,
    borderColor: '#b93990ff',
    borderRadius: 42,
    padding: 4,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});
