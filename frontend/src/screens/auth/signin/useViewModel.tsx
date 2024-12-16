import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function useViewModel() {
  const { navigate } = useNavigation();
  const [checked, setChecked] = useState(false);

  const { control, handleSubmit } = useForm();
  const contentPosition = useSharedValue(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setTimeout(() => {
          contentPosition.value = withTiming(-event.endCoordinates.height / 2, {
            duration: 300,
          });
        }, 300);
      }
    );

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      contentPosition.value = withTiming(0, { duration: 300 });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [contentPosition]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: contentPosition.value }],
    };
  });

  return { control, animatedStyle, checked, setChecked, navigate };
}