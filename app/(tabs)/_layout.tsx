import {Tabs} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: "rgb(227, 156, 210)",
            headerStyle: {
                backgroundColor: '#eed2e5ff'
            },
            headerShadowVisible: false,
            headerTintColor: '#1b1a1bff',
            tabBarStyle: {
            backgroundColor: '#f8f5f6ff',
            },
        }}>
            <Tabs.Screen name = "index" 
            options={{
                title: 'About me...',
                tabBarIcon: ({color, focused}) => 
                    (<Ionicons name = {focused ? 'home-sharp' : 'home-outline'}
                    color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name = "education"
            options={{
                title: 'Education',
                tabBarIcon: ({color, focused}) =>
                (<Ionicons name = {focused ? 'school-outline' : 'school-sharp'}
                    color={color} size={24}/>
                ),
            }}/>
            <Tabs.Screen name = "grades" 
            options={{
                title: "Grades",
                tabBarIcon: ({color, focused}) => 
                (<MaterialCommunityIcons name = {focused ? 'numeric-10-box-multiple': 'numeric-10-box-multiple-outline'}
                    color={color} size={24} />
                )
                }} />
            <Tabs.Screen name = "projects" 
            options={{
                title: "Projects",
                tabBarIcon: ({color, focused}) => 
                (<MaterialCommunityIcons name = {focused ? 'laptop': 'laptop-account'}
                    color={color} size={24} />
                )
                }} />
        </Tabs>
    );
}

