import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View className="flex-row items-center mb-4">
      <TextInput
        className="flex-1 border bg-white border-gray-300 rounded-md p-2"
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={24} color="#4A5568" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
