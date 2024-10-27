import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { farmApi } from "@/domains/services/farms/farms.service";
import { FarmsResponse } from "@/domains/models/farms";
import { useRouter } from "expo-router";
import Pagination from "@/components/Pagination";
import Search from "@/components/input/Search";

const HomePage = () => {
  const [farms, setFarms] = useState<FarmsResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
        setFarms(response.data.items);
        setTotalPages(response.data.totalPages);
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
      <GestureHandlerRootView className="flex-1 justify-center items-center bg-gray-100">
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
        <View className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <Text className="text-xl font-bold text-gray-900 mb-2">{item.name}</Text>
          <Text className="text-gray-700 mb-1">Owner: {item.owner}</Text>
          <Text className="text-gray-700 mb-1">Address: {item.address}</Text>
          <Text className="text-gray-700 mb-1">Description: {item.description}</Text>
          <Text className="text-gray-700 mb-2">Rating: {item.rating}</Text>

          {item.farmImages && item.farmImages.length > 0 && (
            <View className="mt-2">
              <Text className="text-gray-800 mb-1 font-semibold">Images:</Text>
              <FlatList
                data={item.farmImages}
                horizontal
                keyExtractor={(image) => image.url}
                renderItem={({ item: imageUrl }) => (
                  <Image
                    source={{ uri: imageUrl.url }}
                    className="w-32 h-32 rounded-md mr-2"
                    resizeMode="cover"
                  />
                )}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-gray-100 p-4 mb-20">
      <Search onSearch={handleSearch} /> 
      <FlatList
        data={farms}
        renderItem={renderFarmCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} 
      />
    </GestureHandlerRootView>
  );
};

export default HomePage;
