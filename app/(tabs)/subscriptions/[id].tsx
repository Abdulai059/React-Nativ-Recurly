import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function subscriptionsDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>subscriptionsDetails</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
