import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { farmApi } from "@/domains/services/farms/farms.service";
import { FarmsResponse } from "@/domains/models/farms";
import { useRouter } from "expo-router";
import Search from "@/components/input/Search";
import Rating from "@/components/Rating";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

const HomePage = () => {
  const [farms, setFarms] = useState<FarmsResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const router = useRouter();

  const fetchFarms = async (search?: string) => {
    try {
      const options = {
        pageIndex: currentPage,
        pageSize: pageSize,
        search,
      };

      const response = await farmApi.getFarmList(options);
      if (response?.succeeded) {
        setFarms(response.data!.items);
        setTotalPages(response.data!.totalPages);
      }
    } catch (error) {
      console.error("Error fetching farms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  const handleSearch = (searchTerm: string) => {
    setLoading(true);
    fetchFarms(searchTerm);
  };

  if (loading) {
    return (
      <GestureHandlerRootView className="items-center justify-center flex-1 bg-gray-100">
        <ActivityIndicator size="large" color="#4a5568" />
      </GestureHandlerRootView>
    );
  }

  const renderFarmCard = ({ item }: { item: FarmsResponse }) => {
    return (
      <TouchableOpacity
        onPress={() => router.push(`/farm/${item.id}`)}
        className="mb-4"
      >
        <View className="p-4 overflow-hidden bg-white rounded-lg shadow-lg">
          <Text className="mb-2 text-xl font-bold text-gray-900">
            {item.name}
          </Text>
          {item.farmImages && item.farmImages.length > 0 && (
            <View className="mt-2">
              <FlatList
                data={item.farmImages}
                horizontal
                keyExtractor={(image) => image.url}
                renderItem={({ item: imageUrl }) => (
                  <Image
                    source={{ uri: imageUrl.url }}
                    className="w-32 h-32 mr-2 rounded-md"
                    resizeMode="cover"
                  />
                )}
              />
            </View>
          )}
          <View className="py-2">
            <Rating rating={item.rating} />
          </View>

          <View className="flex-row items-center">
            <Fontisto name="person" size={20} color="black" />
            <Text className="text-gray-700 pl-2">{item.owner}</Text>
          </View>

          <View className="flex-row items-center pt-2">
            <Entypo name="address" size={20} color="black" />
            <Text className="text-gray-700 pl-1">{item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView className="flex-1 p-4 mb-20 bg-gray-100">
      <Search onSearch={handleSearch} />
      <FlatList
        data={farms}
        renderItem={renderFarmCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </GestureHandlerRootView>
  );
};

export default HomePage;
