import { Pressable, Text, View } from "react-native";

export default function Button({ handleAddList }) {
  return (
    <View className="items-center">
      <View className="mt-[20px] items-center">
        <Pressable
          onPress={handleAddList}
          className="bg-[#568fd1] py-2 px-4 border border-white rounded shadow w-[100px] active:bg-slate-700"
        >
          <Text className="text-center font-semibold text-slate-800 text-white active:text-black">
            Save
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
