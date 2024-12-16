import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "@/screens/auth/signin";
import SignUp from "@/screens/auth/signup";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
