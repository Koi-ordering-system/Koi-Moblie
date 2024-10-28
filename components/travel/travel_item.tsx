// src/components/travel/TravelItem.tsx

import { TravelsResponse } from "@/domains/models/travels";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface TravelItemProps {
  travel: TravelsResponse;
}

const TravelItem: React.FC<TravelItemProps> = ({ travel }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/detail/${travel.id}`); // Chuyển đến trang chi tiết
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="p-4 my-2 bg-white rounded-lg shadow-lg"
    >
      <View className="relative">
        {travel.farmImages.length > 0 ? (
          <Image
            className="w-full h-48 rounded-lg"
            source={{ uri: travel.farmImages[0] }}
            resizeMode="cover"
          />
        ) : (
          <Image
            className="w-full h-48 rounded-lg"
            source={{
              uri: "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png",
            }}
            resizeMode="cover"
          />
        )}
      </View>

      <Text className="mt-3 text-lg font-bold">{travel.farmName}</Text>
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-sm font-semibold text-slate-400">
          {travel.price} / Day
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TravelItem;
