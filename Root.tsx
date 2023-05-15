import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import type RootStackParamList from "./constants/navigation/RootStackParamListProps";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import { ActivityIndicator, Text, View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#1d9bf1" />
      </View>
    );
  }

  return (
    <>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Register">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Login Screen</Text>
        </View>
      )}
    </>
  );
}
