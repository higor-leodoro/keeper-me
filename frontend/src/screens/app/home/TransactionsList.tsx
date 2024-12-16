import { View, FlatList, StyleSheet } from "react-native";
import CustomText from "@/components/CustomText";
import colors from "@/constants/colors";
import { Feather } from "@expo/vector-icons/";

type Transaction = {
  id: string;
  description: string;
  value: string;
  type: "expense" | "income";
  date: string;
};

type TransactionsListProps = {
  transactions: Transaction[];
};

const Header = () => (
  <CustomText
    text="Last transactions"
    weight="semiBold"
    fontSize={18}
    color={colors.textDark}
    style={{ textAlign: "center", marginVertical: "6%" }}
  />
);

const Separator = () => <View style={{ marginVertical: 10 }} />;

const Transactions = ({ item }: { item: Transaction }) => (
  <View style={styles.container}>
    <View style={styles.typeDate}>
      <View
        style={[
          styles.iconTextContainer,
          item.type === "expense"
            ? { backgroundColor: colors.error }
            : { backgroundColor: colors.success },
        ]}
      >
        <Feather
          name={item.type === "expense" ? "arrow-down" : "arrow-up"}
          size={24}
          color={colors.light}
        />
        <CustomText text={item.type} weight="bold" />
      </View>
      <CustomText text={item.date} weight="medium" fontSize={14} />
    </View>
    <CustomText text={item.description} fontSize={16} />
    <CustomText
      text={`$${Math.abs(Number(item.value)).toFixed(2)}`} // Formata o valor
      fontSize={24}
      weight="light"
      color={item.type === "expense" ? colors.error : colors.success}
    />
  </View>
);

export default function TransactionsList({
  transactions,
}: TransactionsListProps) {
  return (
    <FlatList
      data={transactions}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
      ListHeaderComponent={Header}
      renderItem={({ item }) => <Transactions item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    gap: 10,
    backgroundColor: colors.background,
  },
  typeDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconTextContainer: {
    width: "32%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 4,
  },
});
