import { View, Text, Pressable } from "react-native";

export default function List() {
  return (
    <View className="mt-10 w-full">
      <Text className="font-bold mb-2">Memo List :</Text>
      <View className="flex bg-gray-400 py-4 px-5 rounded mt-2 w-full">
        <Text className="font-bold pb-3 justify-start">
          Morita Hikaru, Tamura Hono, Yamasaki Ten, Fujiyoshi Karin
        </Text>
        <View className="flex flex-row space-x-[10px] justify-end">
          <Pressable className="flex flex-row bg-white p-1 rounded justify-center w-[50px]">
            <Text className="font-bold">Edit</Text>
          </Pressable>
          <Pressable className="flex flex-row bg-red-400 p-1 rounded justify-center w-[50px]">
            <Text className="font-bold">Delete</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
