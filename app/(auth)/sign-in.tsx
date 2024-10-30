import { useSignIn } from "@clerk/clerk-expo";
import { useOAuth } from "@clerk/clerk-expo";
import { Text, Button, View, ImageBackground } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { SafeAreaView } from "react-native-safe-area-context";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  const { setActive } = useSignIn();

  useWarmUpBrowser();

  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });

  const onGooglePress = React.useCallback(async () => {
    try {
      const { createdSessionId } = await startGoogleOAuthFlow({
        redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/koi-login.jpg")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SafeAreaView className="flex-1 p-4">
        <View className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-80">
          <Text className="mb-4 text-3xl font-bold text-center text-amber-600">
            Welcome to PicoKoi!
          </Text>
          <Text className="mb-6 text-lg text-center text-gray-700">
            Sign in to continue exploring amazing features and benefits.
          </Text>
          <Button
            title="Sign in with Google"
            onPress={onGooglePress}
            color="#FBBF24"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
