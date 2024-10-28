import { KoiDetail } from "@/domains/models/travels/travel-detail.response";
import React from "react";
import { Text, Image, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Thư viện icon

interface KoiDetailItemProps {
  koi: KoiDetail;
}

const KoiDetailItem: React.FC<KoiDetailItemProps> = ({ koi }) => {
  return (
    <View className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
      <Text className="text-lg font-semibold text-start">{koi.name}</Text>
      {koi.images.length > 0 ? (
        <Image
          className="w-full h-32 mt-2 rounded-md"
          source={{ uri: koi.images[0] }}
          resizeMode="cover"
        />
      ) : (
        <Image
          className="w-full h-32 mt-2 rounded-md"
          source={{
            uri: "https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png",
          }}
          resizeMode="cover"
        />
      )}
      <Text className="mt-2 text-center text-gray-600">{koi.description}</Text>

      <View className="flex-row justify-around mt-3">
        <View className="flex items-center">
          <MaterialIcons name="format-size" size={24} color="blue" />
          <Text className="mt-1">
            Size: {koi.minSize} - {koi.maxSize} cm
          </Text>
        </View>
        <View className="flex items-center">
          <MaterialIcons name="attach-money" size={24} color="green" />
          <Text className="mt-1">Price: ${koi.price.toFixed(2)}</Text>
        </View>
        <View className="flex items-center">
          <MaterialIcons name="shopping-cart" size={24} color="orange" />
          <Text className="mt-1">Quantity: {koi.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default KoiDetailItem;
