import { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import CustomText from "../CustomText";
import colors from "@/constants/colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";

type MainButtonProps = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

export default function MainButton({
  title,
  loading,
  disabled,
  onPress,
}: MainButtonProps) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (loading) {
      rotation.value = withRepeat(withTiming(360, { duration: 1000 }), -1);
    }
  }, [loading]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading ? (
        <View style={styles.spinnerContainer}>
          <Animated.View style={[styles.spinner, animatedStyle]} />
        </View>
      ) : (
        <CustomText
          text={title}
          fontSize={18}
          weight="bold"
          color={disabled ? colors.textDark : colors.textLight}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.inactive,
  },
  spinnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
  spinner: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.textLight,
    borderTopColor: "transparent",
    borderRadius: 12,
  },
});
