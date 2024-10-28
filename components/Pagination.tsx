import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <View className="flex-row justify-center mt-4">
      <TouchableOpacity
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-500'}`}
      >
        <Text className="text-white">Previous</Text>
      </TouchableOpacity>

      <Text className="mx-4 text-lg">{`Page ${currentPage} of ${totalPages}`}</Text>

      <TouchableOpacity
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-500'}`}
      >
        <Text className="text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
