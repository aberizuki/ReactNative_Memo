import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import List from "../components/List";

export default function Home({ navigation }) {
  return (
    <View className="flex-1 items-center bg-slate-800 w-[100%] px-10">
      <View className="flex-1 mt-[60px] w-[370px] ">
        <Title />

        <Input />

        <List />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
