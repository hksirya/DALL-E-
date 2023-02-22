import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <View className="flex mb-6 space-y-6">
      <View className="flex flex-row items-center  space-x-5">
        <Text className="block font-semibold text-base">{labelName}</Text>
        {isSurpriseMe && (
          <TouchableOpacity
            onPress={handleSurpriseMe}
            className="bg-black p-2 mt-2  text-base rounded-md items-center"
          >
            <Text className="text-white  text-[14px]">Surprise Me</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        type={type}
        id={name}
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        keyboardType="text"
        className="bg-gray-50 py-4 rounded-lg placeholder:p-4 border border-gray-300 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block "
      />
    </View>
  );
};

export default FormField;
