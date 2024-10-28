// src/components/common/SearchBar.tsx

import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";

interface SearchBarProps extends React.ComponentProps<typeof TextInput> {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
  ...props
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View className="flex-row items-center px-4 py-1 mx-4 my-2 border rounded-lg">
      <Ionicons name="search" size={20} color="#888" className="mr-2" />
      <TextInput
        className="flex-1 p-2 text-lg"
        placeholder={placeholder}
        value={query}
        onChangeText={handleSearch}
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

export default styled(SearchBar);
