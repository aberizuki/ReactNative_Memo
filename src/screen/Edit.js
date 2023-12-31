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
import EditInput from "../components/Edit Input";

export default function Edit({ route }) {
  // console.log(route);
  const { id, getList } = route.params;
  return <EditInput idu={id} getList={getList} />;
}
