import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href="/Onboarding"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to SIgn In
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Onboardi SIgn up
      </Link>

      <Link
        href="/subscriptions/spotify"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Subscriptions
      </Link>
    </SafeAreaView>
  );
}
