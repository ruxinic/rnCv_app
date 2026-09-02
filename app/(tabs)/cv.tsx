import { Text, StyleSheet} from "react-native";
import JobCard from "@/components/JobCard";
import { ScrollView } from "react-native";
import React from "react";

export default function Education() {
  const universityLogo = require("@/assets/images/vu.png");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>RN CV</Text>

      <JobCard
      title="Teaching Assistant"
      employer="Vrije Universiteit Amsterdam"
      type="part-time"
      timeline="Jan 2024 - July 2026"
      location="Amsterdam"
      logo={universityLogo}
      description="later"/>

    </ScrollView>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0f7",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
