import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ImageViewer from "./ImageViewer";


export default function HomeCard() {
    const ruxiImage = require('@/assets/images/rux.png');

    return (
 
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={ruxiImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.hello}>Hello there!</Text>
                <Text style={styles.desc}>Welcome to Ruxandra's CV app!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    paddingTop: 5,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f4f7",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  desc: {
    fontWeight: "bold",
    fontSize: 12,
  },
  hello: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#555",
  },
});
