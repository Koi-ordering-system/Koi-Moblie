import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <View className="flex-row items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesome
          key={`full-${index}`}
          name="star"
          size={20}
          color="#FFD700"
        />
      ))}

      {halfStar && (
        <FontAwesome name="star-half-full" size={20} color="#FFD700" />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesome
          key={`empty-${index}`}
          name="star-o"
          size={20}
          color="#FFD700"
        />
      ))}

      <Text className="ml-2 text-gray-700">{rating.toFixed(1)}</Text>
    </View>
  );
};

export default Rating;
