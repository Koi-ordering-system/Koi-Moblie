import React from "react";
import { View, FlatList } from "react-native";
import TravelItem from "@/components/travel/travel_item";
import { TravelsResponse } from "@/domains/models/travels";

interface TravelListProps {
  travels: TravelsResponse[];
}

const TravelList: React.FC<TravelListProps> = ({ travels }) => {
  return (
    <FlatList
      data={travels}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <View className="flex-1 p-1">
          <TravelItem travel={item} />
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      className="p-2"
    />
  );
};

export default TravelList;
