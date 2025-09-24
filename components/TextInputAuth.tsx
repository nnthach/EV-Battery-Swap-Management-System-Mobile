import { useState } from "react";
import { Text, TextInput, View } from "react-native";

function TextInputAuth({
  label,
  value,
  onChangeText,
  error,
  customLeftCSSOnblur = "left-4",
  customLeftCSSOnfocus = "left-4",
  ...props
}: any) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <View
        className={`relative border ${
          error
            ? "border-red-500"
            : isFocused
            ? "border-blue-four"
            : "border-gray-200"
        } rounded-xl h-14 `}
      >
        <TextInput
          className={`h-full w-full px-4 pb-1 text-xl text-blue-four`}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textAlignVertical="center"
          {...props}
        />
        <Text
          className={`absolute px-1 
                        transition-all duration-200 ease-in-out ${
                          isFocused || value
                            ? `-top-3 ${customLeftCSSOnfocus} scale-90 text-blue-four bg-white`
                            : `top-1/2 -translate-y-1/2 ${customLeftCSSOnblur} scale-125 text-gray-400`
                        }`}
        >
          {label}
        </Text>
      </View>

      {error && (
        <Text className="text-red-500 text-sm mt-[-14px]">{error}</Text>
      )}
    </>
  );
}

export default TextInputAuth;
