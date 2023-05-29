import React from "react";
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import DrawerStackParamList from "../../constants/navigation/DrawerParamListProps";

interface Props {
  navigation: NativeStackScreenProps<DrawerStackParamList, "Home">;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
