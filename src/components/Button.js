import { Pressable, Text, View } from "react-native";

export default function Button() {
  return (
    <View className="items-center">
      <View className="mt-[20px] items-center">
        <Pressable className="bg-blue-500 py-2 px-4 border border-gray-400 rounded shadow w-[100px]">
          <Text className="text-center font-semibold text-white">Save</Text>
        </Pressable>
      </View>
    </View>
  );
}
