import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AuthStackParamList from "../../constants/navigation/AuthStackParamListProps";
import { AuthContext } from "../../context/AuthProvider";
import styles from "./LoginStyle";

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Login">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Please Login into Health App</Text>
      <View style={styles.form}>
        <View>
          {error && <Text style={styles.error}>{error}</Text>}
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="gray"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => login(email, password)}
          style={[styles.loginButton, styles.mt5]}
        >
          {isLoading && (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="small"
              color="white"
            />
          )}
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerPageContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerTextLink}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
