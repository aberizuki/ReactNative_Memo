import { Text, View, TextInput } from "react-native";

export default function Input() {
  return (
    <View className="mt-10 items-center">
      <View className="w-full">
        <TextInput
          className="bg-white w-full justify-center shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Input text here"
        ></TextInput>
      </View>
    </View>
  );
}
