import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "@/constants/colors";
import poppins from "@/constants/font";

import { Feather } from "@expo/vector-icons";

import Home from "@/screens/app/home";
import RegisterTransaction from "@/screens/app/register-transaction";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer.Navigator
      screenListeners={{
        state: (e) => {
          const isOpen = e.data?.state?.history?.some(
            (item) => item.type === "drawer"
          );
          setIsDrawerOpen(isOpen);
        },
      }}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveBackgroundColor: "transparent",
        drawerInactiveTintColor: "#616161",
        drawerActiveTintColor: colors.primary,
        drawerHideStatusBarOnOpen: true,
        overlayColor: "transparent",
        drawerStyle: { backgroundColor: colors.background, width: "53.1%" },
        drawerLabelStyle: {
          fontFamily: poppins.bold,
          fontSize: 16,
        },
        sceneStyle: {
          backgroundColor: isDrawerOpen ? colors.primary : colors.background,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          // drawerIcon: ({ size, color }) => (
          //   <Feather name="home" size={size} color={color} />
          // ),
        }}
      />
      <Drawer.Screen
        name="RegisterTransaction"
        component={RegisterTransaction}
        options={{
          drawerLabel: "Transaction",
          // drawerIcon: ({ size, color }) => (
          //   <Feather name="home" size={size} color={color} />
          // ),
        }}
      />
    </Drawer.Navigator>
  );
}
