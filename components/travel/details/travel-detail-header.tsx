import { TravelDetailResponse } from "@/domains/models/travels/travel-detail.response";
import React from "react";
import { Text, Image, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface TravelDetailHeaderProps {
  travel: TravelDetailResponse;
}

const TravelDetailHeader: React.FC<TravelDetailHeaderProps> = ({ travel }) => {
  return (
    <View className="p-6 mb-6 bg-white rounded-lg shadow-xl">
      <View className="relative overflow-hidden rounded-lg">
        {travel.farmImages && travel.farmImages.length > 0 ? (
          <Image
            className="w-full h-64"
            source={{ uri: travel.farmImages[0] }}
            resizeMode="cover"
          />
        ) : (
          <Image
            className="w-full h-64"
            source={{
              uri: "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png",
            }}
            resizeMode="cover"
          />
        )}

        <View className="absolute flex-row items-center gap-2 top-3 right-3 ">
          <MaterialIcons name="star" size={20} color="gold" />
          <Text className="text-lg text-gray-700">
            {travel.farmRating.toFixed(1)}
          </Text>
        </View>
      </View>

      {/* Additional Information with Icons */}

      <View className="mt-6">
        <View className="flex-row items-center gap-3">
          <Text className="mb-2 text-3xl font-bold text-center text-gray-800">
            {travel.farmName}
          </Text>

          <View className="flex-row items-center gap-2 bg-orange-300 rounded-full">
            <Text className="mb-3 mr-2 text-sm">
              {travel.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-around pt-2 mt-2 border-t border-gray-200"></View>

        <View className="justify-around p-4 rounded-lg bg-slate-100">
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="person" size={20} color="gray" />
            <Text className="text-lg text-gray-800">{travel.farmOwner}</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="location-on" size={20} color="gray" />
            <Text className="text-lg text-gray-800">{travel.farmAddress}</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="schedule" size={20} color="gray" />
            <Text className="text-lg text-gray-800">{travel.days} days</Text>
          </View>
        </View>

        <Text className="mt-2 text-lg font-semibold">Description: </Text>
        <View className="p-4 bg-slate-100">
          <Text className="text-lg text-gray-600 text-start ">
            {travel.farmDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TravelDetailHeader;
