import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import Animated, { SlideInUp } from "react-native-reanimated";

import SafeScreen from "@/components/SafeScreen";
import DrawerSceneWrapper from "@/constants/DrawerSceneWarapper";
import Header from "@/components/Header";
import colors from "@/constants/colors";
import CustomText from "@/components/CustomText";
import TransactionsList from "./TransactionsList";

import useViewModel from "./useViewlModel";

export default function Home() {
  const { selectedRange, handleSelectRange, balance, loading, transactions } =
    useViewModel();
  return (
    <DrawerSceneWrapper>
      <SafeScreen>
        <View style={{ flex: 1 }}>
          <Header />
          <View style={styles.balanceCard}>
            <CustomText text="Total balance" weight="semiBold" fontSize={16} />
            <CustomText
              text={loading ? <ActivityIndicator /> : balance}
              weight="light"
              fontSize={32}
            />
            <View style={styles.filterButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.filterButton,
                  selectedRange === "30" && styles.selectedButton,
                ]}
                onPress={() => handleSelectRange("30")}
              >
                <CustomText
                  text="30 days"
                  weight="semiBold"
                  fontSize={12}
                  color={
                    selectedRange === "30" ? colors.light : colors.textDark
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.filterButton,
                  selectedRange === "60" && styles.selectedButton,
                ]}
                onPress={() => handleSelectRange("60")}
              >
                <CustomText
                  text="60 days"
                  weight="semiBold"
                  fontSize={12}
                  color={
                    selectedRange === "60" ? colors.light : colors.textDark
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.filterButton,
                  selectedRange === "90" && styles.selectedButton,
                ]}
                onPress={() => handleSelectRange("90")}
              >
                <CustomText
                  text="90 days"
                  weight="semiBold"
                  fontSize={12}
                  color={
                    selectedRange === "90" ? colors.light : colors.textDark
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Animated.View
          entering={SlideInUp.duration(700)}
          style={styles.lastMovimentationsContainer}
        >
          {transactions.length > 0 ? (
            <TransactionsList transactions={transactions} />
          ) : (
            <CustomText
              text="No transactions found."
              weight="semiBold"
              fontSize={16}
              color={colors.textDark}
              style={{ textAlign: "center", marginTop: 20 }}
            />
          )}
        </Animated.View>
      </SafeScreen>
    </DrawerSceneWrapper>
  );
}
