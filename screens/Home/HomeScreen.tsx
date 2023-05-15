import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../../constants/navigation/RootStackParamListProps";
import { AuthContext } from "../../context/AuthProvider";

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}
