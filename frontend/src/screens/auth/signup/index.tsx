import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "@/constants/colors";

import Animated from "react-native-reanimated";

import { Feather } from "@expo/vector-icons";

import SafeScreen from "@/components/SafeScreen";
import CustomText from "@/components/CustomText";
import ControlledTextInput from "@/components/ControlledTextInput";
import useViewModel from "./useViewModel";
import MainButton from "@/components/MainButton";

export default function SignUp() {
  const {
    control,
    animatedStyle,
    goBack,
    onSubmit,
    handleSubmit,
    isValid,
    loading,
    serverMessage,
  } = useViewModel();

  return (
    <SafeScreen>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Feather name="arrow-left" size={24} color={colors.light} />
        </TouchableOpacity>
        <CustomText
          text="Register"
          weight="bold"
          fontSize={18}
          style={{ flex: 1, textAlign: "center" }}
        />
      </View>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.formContainer}>
          {serverMessage && (
            <CustomText
              text={serverMessage}
              weight="semiBold"
              color={colors.error}
            />
          )}
          <ControlledTextInput
            control={control}
            name="name"
            autoCorrect={false}
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor={colors.textGray}
            autoComplete="off"
            icon={<Feather name="user" size={24} color={colors.background} />}
          />
          <ControlledTextInput
            control={control}
            name="lastName"
            spellCheck={false}
            style={styles.input}
            placeholder="Enter your last name"
            autoComplete="off"
            placeholderTextColor={colors.textGray}
            icon={<Feather name="lock" size={24} color={colors.background} />}
          />
          <ControlledTextInput
            control={control}
            autoCapitalize="none"
            name="email"
            autoCorrect={false}
            style={styles.input}
            placeholder="Enter your email"
            autoComplete="off"
            placeholderTextColor={colors.textGray}
            icon={<Feather name="lock" size={24} color={colors.background} />}
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
          <MainButton
            title="Sign Up"
            loading={loading}
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Animated.View>
    </SafeScreen>
  );
}
