import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  );
}
