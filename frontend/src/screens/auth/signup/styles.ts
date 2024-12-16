import { StyleSheet } from "react-native";
import colors from "@/constants/colors";
import poppins from "@/constants/font";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    zIndex: 99,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "90%",
    justifyContent: "center",
    gap: 16,
  },
  input: {
    width: "100%",
    paddingVertical: "4%",
    paddingHorizontal: 20,
    paddingLeft: 35,
    borderRadius: 4,
    fontFamily: poppins.medium,
    color: colors.textDark,
    backgroundColor: colors.light,
  },
});

export default styles;
