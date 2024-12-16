import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Controller, Control } from "react-hook-form";
import colors from "@/constants/colors";
import poppins from "@/constants/font";

type ControlledTextInput = TextInputProps & {
  control: Control<any>;
  name: string;
  icon?: React.ReactNode;
};

export default function ControlledTextInput({
  control,
  name,
  icon,
  ...rest
}: ControlledTextInput) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={styles.container}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <TextInput
            {...rest}
            style={[styles.input, !icon && { paddingLeft: 20 }]}
            onChangeText={onChange}
            value={value}
            keyboardAppearance="dark"
            autoComplete="off"
            autoCorrect={false}
            placeholderTextColor={colors.textGray}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
  },
  icon: {
    position: "absolute",
    left: 5,
    top: "15%",
    zIndex: 99,
  },
  input: {
    width: "100%",
    paddingVertical: "4%",
    paddingHorizontal: 20,
    paddingLeft: 35,
    borderRadius: 4,
    fontFamily: poppins.medium,
    color: colors.textDark,
    backgroundColor: colors.light,
  },
});
