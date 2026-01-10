import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type Props = {
  institution: string;
  profile: string;
  timeline: string;
  description: string;
  logo?: any
  location: string;
};

export default function EducationCard({ profile, institution, timeline, description, logo, location }: Props) {
  return (
    <View style={styles.card}>
      {logo && <Image source={logo} style={styles.logo} />}
      <View style={styles.textContainer}>
        <Text style={styles.institution}>{institution}</Text>
        <Text style={styles.profile}>{profile}</Text>
        <Text style={styles.profile}>{location}</Text>
        <Text style={styles.timeline}>{timeline}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 8,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  profile: {
    fontWeight: "bold",
    fontSize: 12,
  },
  institution: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#555",
  },
  timeline: {
    fontSize: 12,
    color: "#888",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});
