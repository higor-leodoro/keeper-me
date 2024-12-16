import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
    marginTop: "15%",
  },
  registerButton: {
    width: "48%",
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 5,
  },
  registerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
