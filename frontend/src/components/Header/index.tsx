import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import Feather from "@expo/vector-icons/Feather";

import CustomText from "../CustomText";
import colors from "@/constants/colors";

export default function Header() {
  const { openDrawer } = useNavigation<any>();
  const route = useRoute();
  const routeName = route.name;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openDrawer}>
        <Feather name="menu" size={24} color={colors.light} />
      </TouchableOpacity>
      <CustomText
        text={routeName}
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
