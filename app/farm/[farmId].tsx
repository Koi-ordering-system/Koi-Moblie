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
        setFarmDetail(response.data);
      }
      setLoading(false);
    }

    fetchFarmDetail();
  }, [farmId]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#4a5568" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-3xl font-bold text-gray-800">
        {farmDetail?.name}
      </Text>
      <Text className="text-gray-600 mt-1">Owner: {farmDetail?.owner}</Text>
      <Text className="text-gray-600">Address: {farmDetail?.address}</Text>
      <Text className="text-gray-600 mt-1">
        Description: {farmDetail?.description}
      </Text>
      <Text className="text-gray-600 mt-1">Rating: {farmDetail?.rating}</Text>

      {/* Farm Images Section */}
      {farmDetail?.farmImages && farmDetail.farmImages.length > 0 && (
        <View className="mt-6">
          <Text className="text-2xl font-semibold text-gray-800 mb-2">
            Farm Images
          </Text>
          <FlatList
            data={farmDetail.farmImages}
            horizontal
            keyExtractor={(image) => image}
            renderItem={({ item: imageUrl }) => (
              <Image
                source={{ uri: imageUrl }}
                className="w-40 h-40 rounded-lg shadow-md mr-2"
                resizeMode="cover"
              />
            )}
          />
        </View>
      )}

      {/* Koi Information Section */}
      {farmDetail?.kois && farmDetail.kois.length > 0 && (
        <View className="mt-6">
          <Text className="text-2xl font-semibold text-gray-800 mb-2">
            Koi Information
          </Text>
          {farmDetail.kois.map((koi) => (
            <View key={koi.id} className="bg-white p-4 rounded-lg shadow mb-4">
              <Text className="text-gray-700 font-semibold">
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
                      className="w-32 h-32 rounded-md mr-2 shadow"
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
          <Text className="text-2xl font-semibold text-gray-800 mb-2">
            Trips Information
          </Text>
          {farmDetail.trips.map((trip) => (
            <View key={trip.id} className="bg-white p-4 rounded-lg shadow mb-2">
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
