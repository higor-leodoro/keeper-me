import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import { Controller, Control } from "react-hook-form";
import colors from "@/constants/colors";

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
            onChangeText={onChange}
            value={value}
            keyboardAppearance="dark"
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
});
