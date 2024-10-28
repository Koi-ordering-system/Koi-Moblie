import useIdStore from "@/domains/stores/zustand/id/use-id-store";
import React, { useState } from "react";
import {
  Button,
  Linking,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { OrderTripBodyRequest } from "@/domains/models/orders/orders-body.request";
import { orderApi } from "@/domains/services/orders/orders.service";
import { Alert } from "react-native";

const OrderPage = () => {
  const { id } = useIdStore();

  const [human, sethuman] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleDateChange = (
    event: any,
    selectedDate: Date | undefined,
    type: "start" | "end"
  ) => {
    if (selectedDate) {
      if (type === "start") {
        setStartDate(selectedDate);
        setShowStartDatePicker(false);
      } else {
        setEndDate(selectedDate);
        setShowEndDatePicker(false);
      }
    }
  };

  const handleSubmit = async () => {
    if (!human || !startDate || !endDate) {
      return;
    }

    const data: OrderTripBodyRequest = {
      userId: "user_2npu2NlrLrftZaRu5OBgtv37889",
      tripId: id,
      quantity: parseInt(human),
      startDate: startDate,
      endDate: endDate,
    };

    // console.log("data", data);

    const response = await orderApi.postOrdersTripCreate(data);

    console.log("response", response);

    // if (response) {
    //   Linking.openURL(response.payOSUrl);
    // } else {
    //   Alert.alert("Error", "Failed to create order");
    // }
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="mb-4 text-xl font-bold text-gray-800">
        Create Invoice
      </Text>

      {/* Price Input */}
      <Text className="mb-2 text-gray-600">Price</Text>
      <TextInput
        className="p-3 mb-4 text-gray-800 border border-gray-300 rounded"
        keyboardType="numeric"
        placeholder="Enter the quantity of the people"
        value={human}
        onChangeText={sethuman}
      />

      {/* Start Date Picker */}
      <Text className="mb-2 text-gray-600">Start Date</Text>
      <TouchableOpacity
        className="p-3 mb-4 border border-gray-300 rounded"
        onPress={() => setShowStartDatePicker(true)}
      >
        <Text className="text-gray-800">
          {startDate ? startDate.toLocaleDateString() : "Select start date"}
        </Text>
      </TouchableOpacity>
      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange(event, date, "start")}
        />
      )}

      {/* End Date Picker */}
      <Text className="mb-2 text-gray-600">End Date</Text>
      <TouchableOpacity
        className="p-3 mb-4 border border-gray-300 rounded"
        onPress={() => setShowEndDatePicker(true)}
      >
        <Text className="text-gray-800">
          {endDate ? endDate.toLocaleDateString() : "Select end date"}
        </Text>
      </TouchableOpacity>
      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange(event, date, "end")}
        />
      )}

      {/* Submit Button */}
      <Button title="Create Invoice" onPress={handleSubmit} color="orange" />
    </View>
  );
};

export default OrderPage;
