import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "@/screens/auth/signin";
import SignUp from "@/screens/auth/signup";
import SuccessSingUp from "@/screens/auth/success-singup";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SuccessSingUp" component={SuccessSingUp} />
    </Stack.Navigator>
  );
}
