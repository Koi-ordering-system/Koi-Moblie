import KoiDetailItem from "@/components/travel/details/koi-detail-item";
import TravelDetailHeader from "@/components/travel/details/travel-detail-header";
import { useTravelDetailQuery } from "@/domains/stores/hooks/travels/use-travel-detail";
import useIdStore from "@/domains/stores/zustand/id/use-id-store";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const TravelDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setId } = useIdStore();

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id, setId]);

  const { data, isLoading, error } = useTravelDetailQuery({
    id,
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>Data not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Travel Detail Header */}
      <TravelDetailHeader travel={data.data!} />

      {/* Koi Details */}
      <View>
        <Text className="ml-4 text-xl font-bold ">
          Most Koi of &nbsp; {data.data?.farmName} Farm
        </Text>
      </View>
      {data.data?.koiDetails.map((koi) => (
        <KoiDetailItem key={koi.id} koi={koi} />
      ))}
    </ScrollView>
  );
};

export default TravelDetail;
