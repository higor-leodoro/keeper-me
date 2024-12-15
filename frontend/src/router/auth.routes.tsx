import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "@/screens/auth/signin";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" component={SignIn} />
    </Stack.Navigator>
  );
}
