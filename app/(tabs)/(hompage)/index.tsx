import React from "react";
import { SafeAreaView } from "react-native";
import { Button, ButtonText } from "@gluestack-ui/themed";

const HomePage = () => {
  const handlePress = () => {
    console.log("Button pressed!");
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        onPress={handlePress}
        backgroundColor="black"
        borderRadius={5}
        padding={10}
      >
        <ButtonText color="#fff" fontSize={16}>
          Click Me!
        </ButtonText>
      </Button>
    </SafeAreaView>
  );
};

export default HomePage;
