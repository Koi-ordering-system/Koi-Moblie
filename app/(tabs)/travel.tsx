import TravelList from "@/components/travel/travel_list";
import SearchBar from "@/components/search-engine";
import { useTravelsQuery } from "@/domains/stores/hooks/travels/use-travels";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useDebounce from "@/hooks/use-debounce";
import { TravelsParamsRequest } from "@/domains/models/travels";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";

import Icon from "react-native-vector-icons/FontAwesome";

const TravelPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const searchDebounce = useDebounce(searchQuery, 500);

  const { data: farmData } = UseFarmsQuery({
    options: {
      pageIndex: 1,
      pageSize: 100,
    },
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const options = useMemo(() => {
    const options: TravelsParamsRequest = {
      pageIndex: 1,
      pageSize: 10,

      keyword: searchDebounce || undefined,
      farmId: selectedFarm || undefined,
    };

    return options;
  }, [searchDebounce, selectedFarm]);

  const { data, isLoading, error } = useTravelsQuery({
    options,
  });

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="items-center justify-center flex-1">
        <Text>Error loading data</Text>
      </View>
    );
  }

  if (!data || data.data?.items.length === 0) {
    return (
      <View className="items-center justify-center flex-1">
        <Text>No data</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="flex-row items-center">
        <SearchBar
          placeholder="Search travel..."
          onSearch={handleSearch}
          autoCapitalize="none"
          keyboardType="default"
          className="flex-1 max-w-[70%]"
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="px-5 py-3 ml-3 bg-orange-500 rounded-md" // Add margin-left for spacing
        >
          <Icon name="filter" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="items-center justify-center flex-1 bg-black bg-opacity-50">
          <View className="w-4/5 p-4 bg-white rounded-lg">
            <Text className="mb-3 text-lg font-bold">Choose a Farm</Text>
            <ScrollView>
              {farmData?.data?.items.map((farm) => (
                <TouchableOpacity
                  key={farm.id}
                  onPress={() => {
                    setSelectedFarm(farm.id);
                    setModalVisible(false);
                  }}
                  className="p-3 border-b border-gray-300"
                >
                  <Text>{farm.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="self-end p-3 mt-4"
            >
              <Text className="text-blue-500">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TravelList travels={data.data?.items || []} />
    </View>
  );
};

export default TravelPage;
