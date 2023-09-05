import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, useWindowDimensions } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import List from "./src/components/List";

export default function App() {
  // const { height } = useWindowDimensions();
  // const [number, setNumber] = useState(0);

  // function handlePress() {
  //   setNumber(parseInt(Math.random() * 10000, 10) % 100);
  // }

  return (
    <View className="flex-1 items-center bg-white w-[100%] px-10">
      <View className="flex-1 mt-20  ">
        <Title />
        <Input />
        <Button />
        <List />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
