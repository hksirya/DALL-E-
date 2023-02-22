import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <View className="rounded-3xl border border-1 border-gray-400/50 p-2 m-4">
      <Image
        source={{ uri: photo }}
        className="w-full h-72 object-cover rounded-t-3xl "
      />

      <Text className="mt-4 text-slate-800 text-lg mx-auto font-semibold">
        {prompt}
      </Text>
      <View className="border border-b mt-4 border-gray-200/80" />
      <Text className="m-4 text-gray-400 text-lg font-semibold  mx-auto">
        Creator: {name}
      </Text>
    </View>
  );
};

export default Card;
