import { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

import CustomText from "../CustomText";
import colors from "@/constants/colors";

enum AppRoutes {
  Home = "Home",
  RegisterTransaction = "RegisterTransaction",
}

export default function Header() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const routeName = route.name;

  function getRouteLabel(routeName: string): string {
    switch (routeName) {
      case AppRoutes.Home:
        return "Home";
      case AppRoutes.RegisterTransaction:
        return "Register Transaction";
      default:
        return routeName;
    }
  }

  useEffect(() => {
    // Caso precise rodar algum efeito quando a rota mudar
  }, [routeName]);

  const routeLabel = getRouteLabel(routeName);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigation.openDrawer}>
        <Feather name="menu" size={24} color={colors.light} />
      </TouchableOpacity>
      <CustomText
        text={routeLabel}
        weight="bold"
        fontSize={18}
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  button: {
    position: "absolute",
    zIndex: 99,
  },
  text: {
    flex: 1,
    textAlign: "center",
  },
});
