import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import poppins from "@/constants/font";
import colors from "@/constants/colors";
import { ReactNode } from "react";

type CustomTextProps = TextProps & {
  text?: string | number | ReactNode;
  fontSize?: number;
  color?: string;
  weight?: "light" | "regular" | "medium" | "semiBold" | "bold";
  style?: StyleProp<TextStyle>;
};

export default function CustomText({
  text,
  fontSize,
  color = colors.textLight,
  weight = "regular",
  style,
  ...rest
}: CustomTextProps) {
  const fontFamily = poppins[weight];
  return (
    <Text style={[{ fontFamily, fontSize, color }, style]} {...rest}>
      {text}
    </Text>
  );
}
