import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import List from "../components/List";
import axios from "axios";

export default function Home() {
  const [dataList, setDataList] = useState([]);

  const getList = () => {
    axios
      .get(`http://192.168.100.22:5000/api/v1/todos`)
      .then((res) => {
        setDataList(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <View className="flex-1 items-center bg-slate-800 w-[100%] px-10">
      <View className="flex-1 mt-[60px] w-[370px] ">
        <Title />

        <Input handleGetList={getList} />

        <List dataList={dataList} getList={getList} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
