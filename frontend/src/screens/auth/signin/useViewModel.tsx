import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signInFormSchema from "./formSchema";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import useAuthStore from "@/stores/auth-store";

type FormData = {
  email: string;
  password: string;
};

export default function useViewModel() {
  const { navigate } = useNavigation<any>();
  const { loading, singIn } = useAuthStore();
  const [checked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signInFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
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

  const onSubmit = (data: FormData) => {
    singIn(data.email, data.password);
  };

  return {
    control,
    animatedStyle,
    checked,
    setChecked,
    isValid,
    handleSubmit,
    onSubmit,
    loading,
    navigate,
  };
}
