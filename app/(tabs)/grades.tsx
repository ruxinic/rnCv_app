import { View, Text, StyleSheet, Pressable, Linking, ScrollView } from "react-native";

const data = [
    { 
      course: "Computer Programming Project", 
      grade: "7.5", 
      date: "09.07.2024", 
      guideLink: "https://example.com/proj" },
  { 
    course: 
    "Statistical Methods", 
    grade: "8.5", 
    date: "22.10.2024", 
    guideLink: "https://example.com/statistics" 
  },
  { 
    course: "Object-Oriented and Functional Programming", 
    grade: "8.0", 
    date: "24.10.2024", 
    guideLink: "https://example.com/oop" 
  },
  { 
    course: "Networks and Graphs", 
    grade: "8.5", 
    date: "16.12.2024", 
    guideLink: "https://example.com/graphs" 
  },
  { 
    course: "Operating Systems", 
    grade: "7.5", 
    date: "18.12.2024", 
    guideLink: "https://example.com/os" 
  },
  { 
    course: "History of Science for CS", 
    grade: "8.0", 
    date: "28.01.2025", 
    guideLink: "https://example.com/historycs" 
  },
  { 
    course: "Professional Development", 
    grade: "VD", 
    date: "26.02.2025", 
    guideLink: "https://example.com/profdev" 
  },
  { 
    course: "Requirements Engineering", 
    grade: "8.0", 
    date: "24.03.2025", 
    guideLink: "https://example.com/requirements" 
  },
  { 
    course: "Software Design", 
    grade: "8.0", 
    date: "27.03.2025", 
    guideLink: "https://example.com/softwaredesign" 
  },
  { 
    course: "Databases", 
    grade: "9.0", 
    date: "23.05.2025", 
    guideLink: "https://example.com/databases" 
  },
  { 
    course: "Information Management for CS", 
    grade: "8.0", 
    date: "26.05.2025", 
    guideLink: "https://example.com/info-mgmt" 
  },
  { 
    course: "Software Engineering Processes", 
    grade: "9.0", 
    date: "25.06.2025", 
    guideLink: "https://example.com/sep" 
  },
  { 
    course: "Knowledge and Data", 
    grade: "9.0", 
    date: "21.10.2025", 
    guideLink: "https://example.com/kd" 
  },
  { 
    course: "Calculus 1", 
    grade: "9.0", 
    date: "22.10.2025", 
    guideLink: "https://example.com/calculus1" 
  },
  { 
    course: "Developing and Organizing Expertise in the Age of AI", 
    grade: "8.0", 
    date: "31.01.2025", 
    guideLink: "https://example.com/ai" 
  },
  { 
    course: "Five O'Clock Neurosciences (Honours)", 
    grade: "8.0", 
    date: "04.06.2025", 
    guideLink: "https://example.com/neurosciences" 
  },
  {
    course: "Computer Networks",
    grade: "7.0",
    date: "31.05.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Linear Algebra",
    grade: "7.5",
    date: "28.05.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Computer Programming",
    grade: "7.5",
    date: "04.04.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Computer Organization",
    grade: "9.5",
    date: "27.03.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Logic and Sets for CS",
    grade: "7.5",
    date: "22.03.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Web Technology",
    grade: "9.0",
    date: "02.02.2024",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Data Structures and Algorithms for CS",
    grade: "7.5",
    date: "22.12.2023",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Pervasive Computing",
    grade: "8.5",
    date: "18.12.2023",
    guideLink: "https://example.com/history105",
  },
  {
    course: "Computational Thinking for Coders",
    grade: "10.0",
    date: "20.10.2023",
    guideLink: "https://example.com/physics201",
  },
  {
    course: "Introduction to Computer Science",
    grade: "8.5",
    date: "19.10.2023",
    guideLink: "https://example.com/math101",
  },
];

export default function Grades() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerText]}>Course</Text>
        <Text style={[styles.cell, styles.headerText]}>Grade</Text>
        <Text style={[styles.cell, styles.headerText]}>Date Achieved</Text>
        <Text style={[styles.cell, styles.headerText]}>Study Guide</Text>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.course}</Text>
          <Text style={styles.cell}>{item.grade}</Text>
          <Text style={styles.cell}>{item.date}</Text>
          <Pressable
            style={styles.cell}
            onPress={() => Linking.openURL(item.guideLink)}
          >
            <Text style={styles.linkText}>Open Link</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  headerRow: {
    backgroundColor: "#f2f2f2",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
