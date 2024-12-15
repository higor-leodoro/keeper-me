import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@/screens/app/home";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
