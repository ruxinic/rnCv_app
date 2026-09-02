import { Text, StyleSheet} from "react-native";
import EducationCard from "@/components/EducationCard";
import { ScrollView } from "react-native";
import React from "react";

export default function Education() {
  const highSchoolLogo = require("@/assets/images/cnitv.png");
  const universityLogo = require("@/assets/images/vu.png");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>🎓 Education</Text>

      <EducationCard
        institution="Vrije Universiteit Amsterdam & Universiteit van Amsterdam"
        type="Joint Degree"
        profile="MSc Computer Science"
        specialization="Big Data Engineering"
        location="Amsterdam, Netherlands"
        timeline="Sept 2026 - Present"
        description="put desc"
        logo={universityLogo}/>

      <EducationCard
        institution="Vrije Universiteit Amsterdam"
        profile="BSc Computer Science"
        specialization="Free Minor"
        location="Amsterdam, Netherlands"
        timeline="Sept 2023 - July 2026"
        description="put desc"
        logo={universityLogo}/>

      <EducationCard
        institution="Vrije Universiteit Amsterdam"
        profile="Honours & Awards"
        location="Amsterdam, Netherlands"
        timeline="Sept 2024 - July 2026"
        description="Honours student put desc"
        logo={universityLogo}/>

      <EducationCard
        institution="National College of Computer Science Tudor Vianu"
        profile="Mathematics-informatics, Informatics intensive"
        location="Bucharest, Romania"
        timeline="Sept 2019 - July 2023"
        description="put desc"
        logo={highSchoolLogo}/>

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
