import React from "react";
import { Button, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../helpers/navigation/NavigationProps";

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
