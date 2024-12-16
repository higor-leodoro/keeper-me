import { ReactNode } from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import { Platform, SafeAreaView } from "react-native";

import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import colors from "@/constants/colors";

export default function DrawerSceneWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const progress = useDrawerProgress();

  const android = Platform.OS === "android";

  const animetedDrawerOpen = useAnimatedStyle(() => {
    const transform = [
      { perspective: 1000 },
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolation.CLAMP
        ),
      },
      // Condicionalmente adiciona o translateX se for Android
      ...(android
        ? [
            {
              translateX: interpolate(
                progress.value,
                [0, 1],
                [0, 200],
                Extrapolation.CLAMP
              ),
            },
          ]
        : [
            {
              translateX: interpolate(
                progress.value,
                [0, 1],
                [0, -95],
                Extrapolation.CLAMP
              ),
            },
          ]),
      {
        rotateY:
          interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) +
          "deg",
      },
    ];

    const borderRadius = interpolate(
      progress.value,
      [0, 1],
      [0, 20],
      Extrapolation.CLAMP
    );

    return {
      transform,
      borderRadius,
      overflow: "hidden",
      flex: 1,
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={animetedDrawerOpen}>{children}</Animated.View>
    </SafeAreaView>
  );
}
