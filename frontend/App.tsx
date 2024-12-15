import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { loadFont } from "@/constants/font";
import { useFonts } from "@expo-google-fonts/poppins";
import Routes from "@/router";

export default function App() {
  const [isFontLoaded] = useFonts(loadFont);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}
