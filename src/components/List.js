import { View, Text, Pressable, FlatList, ScrollView } from "react-native";

export default function List() {
  return (
    <View className="mt-10 w-full h-[520px]">
      <Text className="font-bold mb-2 text-white">Memo List :</Text>
      <View>
        {/* <ScrollView>
          <View className="flex bg-slate-400 py-4 px-5 rounded mt-2 w-full drop-shadow-xl shadow-xl">
            <Text className="font-bold pb-3 justify-start text-[16px]">
              Morita Hikaru, Tamura Hono
            </Text>
            <View className="flex flex-row space-x-[10px] justify-end">
              <Pressable className="flex flex-row bg-white p-1 rounded justify-center w-[50px] active:bg-slate-700">
                <Text className="font-bold">Edit</Text>
              </Pressable>
              <Pressable className="flex flex-row bg-red-400 p-1 rounded justify-center w-[50px] active:bg-slate-700">
                <Text className="font-bold">Delete</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView> */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={() => {
            return (
              <View className="flex bg-slate-400 py-4 px-5 rounded mt-2 w-full drop-shadow-xl shadow-xl">
                <Text className="font-bold pb-3 justify-start text-[16px]">
                  Morita Hikaru, Tamura Hono, Yamasaki Ten
                </Text>
                <View className="flex flex-row space-x-[10px] justify-end">
                  <Pressable className="flex flex-row bg-white p-1 rounded justify-center w-[50px] active:bg-slate-700">
                    <Text className="font-bold">Edit</Text>
                  </Pressable>
                  <Pressable className="flex flex-row bg-red-400 p-1 rounded justify-center w-[50px] active:bg-slate-700">
                    <Text className="font-bold">Delete</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
