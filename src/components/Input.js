import { Text, View, TextInput } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Input() {
  const [formList, setFormList] = useState({
    notes: "",
  });

  const handleAddList = () => {
    axios({
      url: "http://192.168.100.22:5000/api/v1/todos",
      method: "post",
      data: formList,
    });
    // .then(() => window.location.reload(false))
    // .then(() => {
    //   ToastAndroid.show("Successfully added", ToastAndroid.SHORT);
    // })
    // .catch(() => {
    //   ToastAndroid.show("Save failed.", ToastAndroid.SHORT);
    // });
  };

  return (
    <View className="mt-10 items-center">
      <View className="w-full">
        <TextInput
          onChangeText={(text) => setFormList({ ...formList, notes: text })}
          className="bg-white w-full justify-center shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Input text here"
        ></TextInput>
      </View>
      <Button handleAddList={handleAddList} />
    </View>
  );
}
