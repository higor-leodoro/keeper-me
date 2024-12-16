import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import colors from "@/constants/colors";

import Animated from "react-native-reanimated";
import { CheckBox } from "@rneui/themed";

import { Feather } from "@expo/vector-icons";

import SafeScreen from "@/components/SafeScreen";
import CustomText from "@/components/CustomText";
import ControlledTextInput from "@/components/ControlledTextInput";
import useViewModel from "./useViewModel";
import MainButton from "@/components/MainButton";

export default function SignIn() {
  const { control, animatedStyle, checked, setChecked, navigate } =
    useViewModel();

  return (
    <SafeScreen>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/logo-c.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formContainer}>
          <ControlledTextInput
            control={control}
            name="email"
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.textGray}
            autoComplete="off"
            icon={<Feather name="user" size={24} color={colors.background} />}
          />
          <ControlledTextInput
            control={control}
            name="password"
            spellCheck={false}
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            autoComplete="off"
            placeholderTextColor={colors.textGray}
            icon={<Feather name="lock" size={24} color={colors.background} />}
          />
          <CheckBox
            checked={checked}
            title="Remember me"
            checkedColor={colors.highlight.medium}
            onPress={() => setChecked(!checked)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <MainButton title="Sign In" />
          <TouchableOpacity
            style={styles.singup}
            onPress={() => navigate("SignUp")}
          >
            <CustomText text="Don't have an account?" />
            <CustomText
              text="Sign up"
              weight="semiBold"
              color={colors.highlight.medium}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeScreen>
  );
}
