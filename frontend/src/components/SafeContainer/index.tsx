import { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import colors from "@/constants/colors";

export default function SafeContainer({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ paddingHorizontal: 16 }}>{children}</View>
    </SafeAreaView>
  );
}
