import { StyleSheet } from "react-native";
import colors from "@/constants/colors";
import poppins from "@/constants/font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  logoContainer: {
    width: "65%",
    height: "10%",
    marginLeft: "5%",
    marginBottom: 30,
    alignSelf: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "90%",
    justifyContent: "center",
    gap: 16,
  },
  checkbox: {
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
    right: 10,
  },
  checkboxText: {
    fontFamily: poppins.bold,
    color: colors.textLight,
    marginLeft: 2,
  },
  singup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    gap: 5,
  },
});

export default styles;
