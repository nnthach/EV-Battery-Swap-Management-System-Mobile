import TextInputAuth from "@/components/TextInputAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name: string, value: string) => {
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log("sign in res", signUpForm);
    } catch (error) {
      console.log("sign in err", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient colors={["#49AFF0", "white"]} className="flex-1">
        <SafeAreaView className="flex-1">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={0}
            className="flex-1"
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              bounces={false}
            >
              {/*heading */}
              <View className="px-6">
                <TouchableOpacity
                  onPress={() => router.back()}
                  className="w-10 h-10 justify-center items-center bg-white rounded-full"
                >
                  <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
              </View>

              {/*Content */}
              <View className="flex-1 justify-end">
                <View className="h-[75%] bg-white items-center rounded-t-[30px]">
                  <Text className="font-semibold text-3xl mt-8 mb-2 text-blue-third">
                    Join With Us
                  </Text>

                  {/*Form */}
                  <View className="w-[80%] gap-4 my-6">
                    <TextInputAuth
                      label="Email"
                      value={signUpForm.email}
                      onChangeText={(text: string) =>
                        handleChange("email", text)
                      }
                    />

                    <TextInputAuth
                      label="Full Name"
                      value={signUpForm.fullname}
                      onChangeText={(text: string) =>
                        handleChange("fullname", text)
                      }
                    />
                    <TextInputAuth
                      label="Password"
                      value={signUpForm.password}
                      onChangeText={(text: string) =>
                        handleChange("password", text)
                      }
                      secureTextEntry
                    />
                    <TextInputAuth
                      label="Confirm Password"
                      value={signUpForm.confirmPassword}
                      onChangeText={(text: string) =>
                        handleChange("confirmPassword", text)
                      }
                      secureTextEntry
                    />
                  </View>

                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-blue-third p-3 w-[80%] rounded-full items-center"
                  >
                    <Text className="text-xl text-white font-medium">
                      Sign Up
                    </Text>
                  </TouchableOpacity>

                  {/*other gg */}
                  <View className="flex-row items-center justify-center my-10 w-[80%] overflow-hidden">
                    <View className=" w-full h-[1px] bg-gray-200" />
                    <Text className="bg-white text-gray-300 px-2">
                      Or sign up with
                    </Text>
                    <View className=" w-full h-[1px] bg-gray-200" />
                  </View>

                  {/* Button login gg */}
                  <View className="w-[80%]">
                    <TouchableOpacity className="border border-gray-300 w-full p-3 rounded-full items-center justify-center flex-row gap-2">
                      <Image
                        source={require("@/assets/icons/google.png")}
                        className="w-6 h-6"
                      />
                      <Text className="text-xl font-medium">Google</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
