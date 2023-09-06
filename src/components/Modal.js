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
import Input from "./Input";

export default function ModalPop() {
  return (
    <Modal transparent={true} visible={false}>
      <View className="bg-[#000000aa] flex-1">
        <View className="bg-white mx-[50px] my-[250px] p-10 flex-1 rounded">
          <View className="mt-10 items-center">
            <View className="w-full">
              <TextInput
                // onChangeText={(text) =>
                //   setFormList({ ...formList, notes: text })
                // }
                className="bg-white w-full justify-center shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Input text here"
              ></TextInput>
            </View>
            <View className="items-center">
              <View className="mt-[20px] items-center">
                <Pressable
                  //   onPress={handleAddList}
                  className="bg-[#568fd1] py-2 px-4 border border-white rounded shadow w-[100px] active:bg-slate-700"
                >
                  <Text className="text-center font-semibold text-slate-800 text-white active:text-black">
                    Save
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
