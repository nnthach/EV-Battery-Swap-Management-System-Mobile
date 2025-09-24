import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <LinearGradient colors={["#49AFF0", "white"]} className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center">
          <View className=" flex-1 justify-center items-center">
            <View className="w-64 h-64 rounded-full overflow-hidden">
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-full h-full object-contain"
              />
            </View>
          </View>
          <View className="w-full items-center mt-auto gap-4 mb-10">
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-blue-third p-2 w-[80%] rounded-full items-center"
            >
              <Text className="text-xl text-white font-medium">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/sign-up")}
              className="bg-blue-third p-2 w-[80%] rounded-full items-center"
            >
              <Text className="text-xl text-white font-medium">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
