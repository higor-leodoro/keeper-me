import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LottieView from "lottie-react-native";

import SafeScreen from "@/components/SafeScreen";
import CustomText from "@/components/CustomText";
import MainButton from "@/components/MainButton";

export default function SuccessSingUp() {
  const { navigate } = useNavigation<any>();
  return (
    <SafeScreen>
      <View style={styles.container}>
        <LottieView
          source={require("@/assets/complete.check.json")}
          autoPlay
          loop={false}
          style={{ width: 200, height: 200 }}
        />
        <CustomText
          text="Your account is create successfully"
          weight="bold"
          fontSize={18}
        />
        <CustomText
          text="Now you can sign in and explore all the features of our app."
          fontSize={16}
          weight="medium"
          style={{ textAlign: "center" }}
        />
        <CustomText
          text="You can start using your account right away by signing in!"
          fontSize={16}
          weight="medium"
          style={{ textAlign: "center" }}
        />
      </View>
      <View style={styles.buttonArea}>
        <MainButton title="Sign In Now" onPress={() => navigate("SignIn")} />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 42,
  },
  buttonArea: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
});
