import {
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  ToastAndroid,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getList } from "../service/Service";

export default function List({ dataList, getList }) {
  const navigation = useNavigation();

  const confirmDelete = (id) => {
    axios
      .delete(`http://192.168.100.22:5000/api/v1/todos/${id}`)
      .then((res) => {
        console.log("Item deleted: ", res.data);
        getList();
      })
      .catch((err) => console.log("err: ", err))
      .then(() => {
        ToastAndroid.show("Successfully deleted", ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show("Delete failed.", ToastAndroid.SHORT);
      });
  };

  return (
    <View className="mt-10 w-full h-[520px]">
      <Text className="font-bold mb-2 text-white">Memo List :</Text>
      <View>
        <FlatList
          data={dataList}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <View className="flex bg-slate-400 py-4 px-5 rounded mt-2 w-full drop-shadow-xl shadow-xl">
                <Text className=" pb-3 justify-start text-[16px]">
                  {item.notes}
                </Text>
                <View className="flex flex-row space-x-[10px] justify-end">
                  <Pressable
                    onPress={() => navigation.navigate("Edit", { id: item.id })}
                    className="flex flex-row bg-white p-1 rounded justify-center w-[50px] active:bg-slate-700"
                  >
                    <Text className="font-bold">Edit</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => confirmDelete(item.id)}
                    className="flex flex-row bg-red-400 p-1 rounded justify-center w-[50px] active:bg-slate-700"
                  >
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
