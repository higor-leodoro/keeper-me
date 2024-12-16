import { View, FlatList, StyleSheet } from "react-native";

import CustomText from "./CustomText";
import colors from "@/constants/colors";

import { Feather } from "@expo/vector-icons/";

const data = [
  {
    id: "1",
    value: "- $ 1000.00",
    description: "Market",
    type: "expense",
    date: "2024/12/10",
  },
  {
    id: "2",
    value: "$ 6000.00",
    description: "Salarry payment",
    type: "income",
    date: "2024/12/05",
  },
  {
    id: "3",
    value: "- $ 60.00",
    description: "Tickets",
    type: "expense",
    date: "2024/12/05",
  },
  {
    id: "4",
    value: "$ 20.00",
    description: "Uber",
    type: "expense",
    date: "2024/12/05",
  },
];

const Header = () => {
  return (
    <CustomText
      text="Last transactions"
      weight="semiBold"
      fontSize={18}
      color={colors.textDark}
      style={{ textAlign: "center", marginVertical: "6%" }}
    />
  );
};

const Separator = () => <View style={{ marginVertical: 10 }} />;

const Transactions = ({ item }: any) => {
  return (
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
        text={item.value}
        fontSize={24}
        weight="light"
        color={item.type === "expense" ? colors.error : colors.success}
      />
    </View>
  );
};

export default function TransactionsList() {
  return (
    <FlatList
      data={data}
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
