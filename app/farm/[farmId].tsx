import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, FlatList } from "react-native";
import { farmApi } from "@/domains/services/farms/farms.service";
import { FarmDetailResponse } from "@/domains/models/farms/farm-detail.response";
import { useLocalSearchParams } from "expo-router";

const FarmDetailPage = () => {
  const { farmId } = useLocalSearchParams() as { farmId: string };
  const [farmDetail, setFarmDetail] = useState<FarmDetailResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFarmDetail() {
      const response = await farmApi.getFarmDetail(farmId);
      if (response?.succeeded) {
        setFarmDetail(response.data!);
      }
      setLoading(false);
    }

    fetchFarmDetail();
  }, [farmId]);

  if (loading) {
    return (
      <View className="items-center justify-center flex-1 bg-gray-50">
        <ActivityIndicator size="large" color="#4a5568" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-3xl font-bold text-gray-800">
        {farmDetail?.name}
      </Text>
      <Text className="mt-1 text-gray-600">Owner: {farmDetail?.owner}</Text>
      <Text className="text-gray-600">Address: {farmDetail?.address}</Text>
      <Text className="mt-1 text-gray-600">
        Description: {farmDetail?.description}
      </Text>
      <Text className="mt-1 text-gray-600">Rating: {farmDetail?.rating}</Text>

      {/* Farm Images Section */}
      {farmDetail?.farmImages && farmDetail.farmImages.length > 0 && (
        <View className="mt-6">
          <Text className="mb-2 text-2xl font-semibold text-gray-800">
            Farm Images
          </Text>
          <FlatList
            data={farmDetail.farmImages}
            horizontal
            keyExtractor={(image) => image}
            renderItem={({ item: imageUrl }) => (
              <Image
                source={{ uri: imageUrl }}
                className="w-40 h-40 mr-2 rounded-lg shadow-md"
                resizeMode="cover"
              />
            )}
          />
        </View>
      )}

      {/* Koi Information Section */}
      {farmDetail?.kois && farmDetail.kois.length > 0 && (
        <View className="mt-6">
          <Text className="mb-2 text-2xl font-semibold text-gray-800">
            Koi Information
          </Text>
          {farmDetail.kois.map((koi) => (
            <View key={koi.id} className="p-4 mb-4 bg-white rounded-lg shadow">
              <Text className="font-semibold text-gray-700">
                Name: {koi.name}
              </Text>
              <Text className="text-gray-700">Quantity: {koi.quantity}</Text>
              {/* Display koi images if any */}
              {koi.imageUrls && koi.imageUrls.length > 0 && (
                <FlatList
                  data={koi.imageUrls}
                  horizontal
                  keyExtractor={(image) => image}
                  renderItem={({ item: imageUrl }) => (
                    <Image
                      source={{ uri: imageUrl }}
                      className="w-32 h-32 mr-2 rounded-md shadow"
                      resizeMode="cover"
                    />
                  )}
                />
              )}
            </View>
          ))}
        </View>
      )}

      {farmDetail?.trips && farmDetail.trips.length > 0 && (
        <View className="mt-6">
          <Text className="mb-2 text-2xl font-semibold text-gray-800">
            Trips Information
          </Text>
          {farmDetail.trips.map((trip) => (
            <View key={trip.id} className="p-4 mb-2 bg-white rounded-lg shadow">
              <Text className="text-gray-700">Days: {trip.days}</Text>
              <Text className="text-gray-700">Price: {trip.price} VND</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default FarmDetailPage;
