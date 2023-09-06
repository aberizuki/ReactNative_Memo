import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, useWindowDimensions } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import List from "./src/components/List";
import ModalPop from "./src/components/Modal";
import Home from "./src/screen/Home";
import Edit from "./src/screen/Edit";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App({ route }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Memo" />
        <Stack.Screen component={Edit} name="Edit" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
