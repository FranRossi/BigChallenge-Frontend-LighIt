import React from "react";
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeStackParamList from "../../constants/navigation/HomeStackParamListProps";

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, "Home">) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
