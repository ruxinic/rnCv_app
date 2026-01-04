import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return( 
    <Stack>
      <Stack.Screen name = "index" options={{title: "About me..."}} />
      <Stack.Screen name = "education" options={{title: "Education"}} />
      <Stack.Screen name = "projects" options={{title: "Projects"}} />
      <Stack.Screen name = "grades" options={{title:"grades"}}/>
      <Stack.Screen name = "(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
