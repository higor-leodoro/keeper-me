import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Animated, { SlideInUp } from "react-native-reanimated";

import SafeScreen from "@/components/SafeScreen";
import DrawerSceneWrapper from "@/constants/DrawerSceneWarapper";
import Header from "@/components/Header";
import colors from "@/constants/colors";
import CustomText from "@/components/CustomText";
import TransactionsList from "./TransactionsList";

export default function Home() {
  return (
    <DrawerSceneWrapper>
      <SafeScreen>
        <View style={{ flex: 1 }}>
          <Header />
          <View style={styles.balanceCard}>
            <CustomText text="Total balance" weight="semiBold" fontSize={16} />
            <CustomText text="$ 4275.00" weight="light" fontSize={32} />
            <View style={styles.filterButtonsContainer}>
              <TouchableOpacity style={styles.filterButton}>
                <CustomText
                  text="30 days"
                  weight="semiBold"
                  fontSize={12}
                  color={colors.textDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <CustomText
                  text="60 days"
                  weight="semiBold"
                  fontSize={12}
                  color={colors.textDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <CustomText
                  text="90 days"
                  weight="semiBold"
                  fontSize={12}
                  color={colors.textDark}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Animated.View
          entering={SlideInUp.duration(700)}
          style={styles.lastMovimentationsContainer}
        >
          <TransactionsList />
        </Animated.View>
      </SafeScreen>
    </DrawerSceneWrapper>
  );
}
