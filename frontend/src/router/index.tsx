import { View } from "react-native";
import LottieView from "lottie-react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import useAuthStore from "@/stores/auth-store";
import colors from "@/constants/colors";

export default function Routes() {
  const { isAuthenticated, loading } = useAuthStore();
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <LottieView
          source={require("@/assets/loading.json")}
          style={{ width: 230, height: 230 }}
        />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
