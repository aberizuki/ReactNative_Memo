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
    <Modal avoidKeyboard transparent={true} visible={true}>
      <View className="bg-[#000000aa] flex-1 items-center content-center">
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "margin" : "height"}
          className="h-[275px] self-center mt-[50%]"
        >
          <View className="bg-slate-600 px-10 py-10 flex-1 rounded">
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
                <View className="mt-[20px] items-center flex flex-row space-x-2">
                  <Pressable
                    //   onPress={handleAddList}
                    className="bg-red-400 py-2 px-4 rounded shadow w-[100px] active:bg-slate-700"
                  >
                    <Text className="text-center font-bold text-slate-800 text-white active:text-black">
                      Cancel
                    </Text>
                  </Pressable>
                  <Pressable
                    //   onPress={handleAddList}
                    className="bg-[#568fd1] py-2 px-4 rounded shadow w-[100px] active:bg-slate-700"
                  >
                    <Text className="text-center font-bold text-slate-800 text-white active:text-black">
                      Save
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
