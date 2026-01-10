import { Text, View , StyleSheet} from "react-native";
import EducationCard from "@/components/EducationCard";
import { ScrollView } from "react-native";

export default function Education() {
 const highSchoolLogo = require("@/assets/images/cnitv.png");
const universityLogo = require("@/assets/images/vu.png");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>🎓 Education</Text>

      <EducationCard
        institution="National College of Computer Science Tudor Vianu"
        profile="Mathematics-informatics, Informatics intensive"
        location="Bucharest, Romania"
        timeline="2019 - 2023"
        description="put desc"
        logo={highSchoolLogo}
      />

      <EducationCard
        institution="Vrije Universiteit Amsterdam"
        profile="BSc Computer Science"
        location="Amsterdam, Netherlands"
        timeline="2023 - Present"
        description="put desc"
        logo={universityLogo}
      />

      <EducationCard
        institution="Vrije Universiteit Amsterdam"
        profile="Honours & Awards"
        location="Amsterdam, Netherlands"
        timeline="2024"
        description="Honours student put desc"
        logo={universityLogo}
      />
    </ScrollView>
  );
}


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
