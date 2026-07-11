import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

function UpcomingSubscriptionCard({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <View className="upcoming-icon-container">
          <Image source={icon} className="upcoming-icon" />
        </View>

        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

export default UpcomingSubscriptionCard;
