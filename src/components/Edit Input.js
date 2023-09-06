import {
  Text,
  View,
  Pressable,
  TextInput,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { ToastAndroid } from "react-native";

export default function EditInput({ idu }) {
  const navigation = useNavigation();

  const [editNotes, setEditNotes] = useState({
    notes: "",
  });

  const getIdu = () => {
    axios
      .get(`http://192.168.100.22:5000/api/v1/todos/${idu}`)
      .then((res) => {
        setEditNotes(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleUpdate = (getList) => {
    axios
      .patch(`http://192.168.100.22:5000/api/v1/todos/${idu}`, editNotes, {})
      .then(() => {
        navigation.navigate("Memo");
      })
      .then((res) => {
        ToastAndroid.show("Edit Success", ToastAndroid.SHORT);
      })
      .catch((err) => ToastAndroid.show("Edit Failed", ToastAndroid.SHORT));
  };

  return (
    <View className="bg-slate-800 px-10 py-10 flex-1 rounded">
      <View>
        <Text className="text-[43px] font-bold text-center text-white">
          Edit
        </Text>
      </View>
      <View className="mt-10 items-center">
        <View className="w-full">
          <TextInput
            onChangeText={(e) => setEditNotes({ ...editNotes, notes: e })}
            className="bg-white w-full justify-center shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Input text here"
          ></TextInput>
        </View>
        <View className="items-center">
          <View className="mt-[30px] items-center flex flex-row space-x-[50px]">
            <Pressable
              onPress={handleUpdate}
              className="bg-[#568fd1] py-2 px-4 rounded shadow w-[100px] active:bg-slate-700"
            >
              <Text className="text-center font-bold text-slate-800 text-white active:text-black">
                Update
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
