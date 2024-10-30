import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ClerkProvider, ClerkLoaded, useUser } from "@clerk/clerk-expo";

import { useColorScheme } from "@/hooks/useColorScheme";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Icon from "react-native-vector-icons/FontAwesome";
import useIdStore from "@/domains/stores/zustand/id/use-id-store";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  );
}

export default function RootLayout() {
  const route = useRouter();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { id } = useIdStore();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <UserCheck route={route}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack>
                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="(travel)/detail/[id]"
                  options={{
                    headerShown: true,
                    title: "",
                    headerRight: () => (
                      <Icon
                        name="edit"
                        size={24}
                        color="#000"
                        onPress={() => {
                          route.push({
                            pathname: "(order)/order",
                            params: { id: id },
                          });
                        }}
                      />
                    ),
                  }}
                />
                <Stack.Screen
                  name="farm/[farmId]"
                  options={{
                    title: "Farm Detail",
                  }}
                />
                <Stack.Screen
                  name="(auth)/sign-in"
                  options={{
                    title: "Sign In",
                  }}
                />
                <Stack.Screen
                  name="(order)/order"
                  options={{
                    headerShown: true,
                    title: "Order",
                  }}
                />
              </Stack>
            </ThemeProvider>
          </QueryClientProvider>
        </UserCheck>
      </ClerkLoaded>
      <Toast />
    </ClerkProvider>
  );
}

function UserCheck({ route, children }: { route: any; children: any }) {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) {
      route.replace("/(auth)/sign-in");
    } else {
      route.replace("/(tabs)");
      Toast.show({
        text1: "Sign in successfully",
        type: "success",
      });
    }
  }, [isSignedIn]);

  return children;
}
