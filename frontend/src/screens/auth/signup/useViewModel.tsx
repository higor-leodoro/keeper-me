import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import singUpFormSchema from "./formSchema";

import model from "./model";

type FormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export default function useViewModel() {
  const { goBack, navigate } = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(singUpFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
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
          contentPosition.value = withTiming(-event.endCoordinates.height / 3, {
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

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await model.createUser(data);
      if (response) {
        setLoading(false);
        navigate("SuccessSingUp");
      }
      setServerMessage(response.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return {
    control,
    animatedStyle,
    goBack,
    navigate,
    onSubmit,
    handleSubmit,
    isValid,
    loading,
    serverMessage,
  };
}
