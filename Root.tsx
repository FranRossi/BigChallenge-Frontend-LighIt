import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import HomeScreen from "./screens/home/HomeScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import type AuthStackParamList from "./constants/navigation/AuthStackParamListProps";
import type HomeStackParamList from "./constants/navigation/HomeStackParamListProps";
import type DrawerStackParamList from "./constants/navigation/DrawerParamListProps";
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from "./context/AuthProvider";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from "./screens/login/LoginScreen";
import * as SecureStore from "expo-secure-store";
import { setUserToken } from "./helpers/axios/axiosConfig";
import styles from "./RootStyle";
import UpdateInfoScreen from "./screens/updatePatientInfo/UpdateInfoScreen";
import { Roles } from "./constants/roles/Roles";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="UpdateInfo"
        component={UpdateInfoScreen}
        options={{ headerShown: true, headerBackTitleVisible: false }}
      />
    </HomeStack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
    >
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const DrawerStackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "black",
        drawerActiveTintColor: "white",
        title: "Home",
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { logout, user } = useContext(AuthContext);

  function updateInfoScreen(role: string) {
    return () => {
      if (role === Roles.PATIENT) {
        props.navigation.navigate("UpdateInfo");
      }
    };
  }
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={false}
    >
      <View style={styles.drawerItemListContainer}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={updateInfoScreen(user?.role ?? "")}>
          <View style={styles.userInitialView}>
            <Text style={styles.userInitial}>{user?.name[0]}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.userNameAndLogoutView}>
          <Text style={styles.userName}>{user?.name}</Text>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.logoutText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default function Root() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, setUser } = useContext<AuthContextType>(AuthContext);

  useEffect(() => {
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          const user = JSON.parse(userString);
          setUser(user);
          setUserToken(user.token);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#1d9bf1" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        {user ? <DrawerStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </>
  );
}
