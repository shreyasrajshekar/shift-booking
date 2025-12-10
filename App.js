import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AllShiftsScreen from "./screens/AllShiftsScreen";
import MyShiftsScreen from "./screens/MyShiftsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#4E8CFF",
          tabBarInactiveTintColor: "gray",

          tabBarStyle: {
            backgroundColor: "#ffffff",
            height: 65,
            paddingBottom: 8,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 5,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "All Shifts") {
              iconName = "calendar-outline";
            } else if (route.name === "My Shifts") {
              iconName = "person-circle-outline";
            }

            return <Ionicons name={iconName} size={28} color={color} />;
          },
        })}
      >
        <Tab.Screen name="All Shifts" component={AllShiftsScreen} />
        <Tab.Screen name="My Shifts" component={MyShiftsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
