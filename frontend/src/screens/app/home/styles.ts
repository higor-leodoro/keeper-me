import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

const styles = StyleSheet.create({
  balanceCard: {
    width: "100%",
    height: "110%",
    borderRadius: 8,
    justifyContent: "center",
    paddingBottom: "10%",
    padding: 12,
    marginTop: 20,
    gap: 5,
    backgroundColor: colors.primary,
  },
  filterButtonsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  filterButton: {
    backgroundColor: colors.light,
    padding: 4,
    borderRadius: 4,
  },
  lastMovimentationsContainer: {
    flex: 2.5,
    paddingHorizontal: 16,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
    backgroundColor: colors.light,
  },
});

export default styles;
