import TextInputAuth from "@/components/TextInputAuth";
import { loginAPI } from "@/services/authService";
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

export default function SignInScreen() {
  const [signInForm, setSignInForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (name: string, value: string) => {
    setSignInForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log("sign in res", signInForm);
      // const res = await loginAPI(signInForm);
      // console.log("login res", res.data);
      router.replace("/(root)/(tabs)");
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
                  <Text className="font-semibold text-3xl mt-10 mb-4 text-blue-third">
                    Welcome Back
                  </Text>

                  {/*Form */}
                  <View className="w-[80%] gap-4 my-6">
                    <TextInputAuth
                      name="usernameOrEmail"
                      label="Username Or Email"
                      value={signInForm.usernameOrEmail}
                      onChangeText={(text: string) =>
                        handleChange("usernameOrEmail", text)
                      }
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                    <TextInputAuth
                      name="password"
                      label="Password"
                      value={signInForm.password}
                      onChangeText={(text: string) =>
                        handleChange("password", text)
                      }
                      secureTextEntry
                      focusedField={focusedField}
                      setFocusedField={setFocusedField}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-blue-third p-3 w-[80%] rounded-full items-center"
                  >
                    <Text className="text-xl text-white font-medium">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/forgot-password")}
                  >
                    <Text className="text-right text-lg text-blue-third mt-4">
                      Forgot password?
                    </Text>
                  </TouchableOpacity>

                  {/*other gg */}
                  <View className="flex-row items-center justify-center my-10 w-[80%] overflow-hidden">
                    <View className=" w-full h-[1px] bg-gray-200" />
                    <Text className="bg-white text-gray-300 px-2">
                      Or sign in with
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
