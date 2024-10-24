import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 60,
          marginBottom: 20,
          marginLeft: 30,
          marginRight: 30,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="(hompage)/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].background,
          },
          headerTitleAlign: "center",
          tabBarLabel(props) {
            return (
              <Text
                style={{
                  color: props.color,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Home
              </Text>
            );
          },
          header: () => (
            <SafeAreaView>
              <View className="flex-row items-center justify-between p-4 bg-white">
                <TouchableOpacity>
                  <TabBarIcon
                    name="menu"
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                </TouchableOpacity>
                <Text className="mr-5 text-lg font-bold">Home</Text>
                <Text> </Text>
              </View>
            </SafeAreaView>
          ),
        }}
      />
      <Tabs.Screen
        name="(travel)/index"
        options={{
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "airplane" : "airplane-outline"}
              color={color}
            />
          ),
          tabBarLabel(props) {
            return (
              <Text
                style={{
                  color: props.color,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Travel
              </Text>
            );
          },
          header: () => (
            <SafeAreaView>
              <View className="flex-row items-center justify-between p-4 bg-white">
                <TouchableOpacity>
                  <TabBarIcon
                    name="menu"
                    color={Colors[colorScheme ?? "light"].tint}
                  />
                </TouchableOpacity>
                <Text className="mr-5 text-lg font-bold">Travel</Text>
                <Text> </Text>
              </View>
            </SafeAreaView>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
