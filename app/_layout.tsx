import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSansRegular: require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansBold: require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansExtraBold: require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    PlusJakartaSansLight: require("@/assets/fonts/PlusJakartaSans-Light.ttf"),
    PlusJakartaSansMedium: require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansSemiBold: require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)" />
  );
}
