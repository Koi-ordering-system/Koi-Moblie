import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

interface LogoutModalProps {
  isVisible: boolean;
  onLogout: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isVisible,
  onLogout,
  onCancel,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onCancel}>
      <View className="bg-white rounded p-4">
        <Text className="text-lg">Are you sure you want to log out?</Text>
        <TouchableOpacity
          className="mt-4 bg-red-500 p-2 rounded"
          onPress={onLogout}
        >
          <Text className="text-white text-center">Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-2 p-2 rounded" onPress={onCancel}>
          <Text className="text-center">Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default LogoutModal;
