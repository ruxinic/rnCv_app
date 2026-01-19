import { Text, StyleSheet } from "react-native";
import AboutCard from "@/components/AboutCards";
import { ScrollView } from "react-native";
import { router } from "expo-router";

export default function Education() {
  const goEducation = () => {
    router.push("/education");
  }
  const goProjects = () => {
    router.push("/projects");
  }
  const goGrades = () => {
    router.push("/grades");
  }
  const goHomeScreen = () => {
    router.push("/");
  }
  return (
     <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.header}>Navigation Guide</Text>
    
        <AboutCard title="About me" desc="introductory screen" 
        action1="card with presentation and image" 
        action2="press on the bouncing button to see a Welcome! image" 
        action3="2 buttons that open text modal" 
        action4="icon button that open this page"
        onPress={goHomeScreen} />
        
        <AboutCard title="Education" desc="read about my education- hs and uni" 
        action1="each card represents each institution i have attended" 
        onPress={goEducation} />
        
        <AboutCard title="Grades" desc="my transcript" 
        action1="each card represents a course" 
        action2="includes the title, my grade, date achieved and a link" 
        action3="each link opens the study guide for the specific course"
        onPress={goGrades} />
        
        <AboutCard title="Projects" desc="my portfolio" 
        action1="GitHub Logo image" 
        action2="pressable text that opens a page with my GitHub account" 
        action3="disclaimer button that opens a modal with text" 
        onPress={goProjects}/>
        
        <AboutCard title="About app" desc="shows how to navigate the app" 
        action1="displays cards describing each screen" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0f7",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
