import { Stack } from "expo-router";

export default function RootLayout() {
  return( 
    <Stack>
      <Stack.Screen name = "index" options={{title: "About me..."}} />
      <Stack.Screen name = "education" options={{title: "Education"}} />
      <Stack.Screen name = "projects" options={{title: "Projects"}} />
      <Stack.Screen name = "grades" options={{title:"Grades"}}/>
      <Stack.Screen name = "(tabs)" options={{headerShown: false}} />
      <Stack.Screen name = "about_app" options={{title: "About App", headerBackTitle:"Back"}} />
    </Stack>
  );
}
