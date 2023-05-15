import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import styles from "./RegisterStyle";
import axiosConfig from "../../helpers/axios/axiosConfig";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../../constants/navigation/NavigationProps";
import { Roles } from "../../constants/roles/Roles";

export default function RegisterScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Register">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<string>(Roles.PATIENT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function register() {
    setIsLoading(true);
    axiosConfig
      .post("/signup", {
        name,
        email,
        password,
        role,
        password_confirmation: confirmPassword,
      })
      .then(() => {
        Alert.alert("User created! Please login.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole(Roles.PATIENT);
        setIsLoading(false);
        setError(null);
        navigation.navigate("Home");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          {error && <Text style={styles.error}>{error}</Text>}
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor="gray"
          />
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
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry
          />
          <View style={styles.mt4}>
            <View style={styles.checkBoxRow}>
              <CheckBox
                value={role === Roles.PATIENT}
                onValueChange={() => setRole(Roles.PATIENT)}
              />
              <Text style={styles.label}>Patient</Text>
            </View>
            <View style={styles.checkBoxRow}>
              <CheckBox
                value={role === Roles.DOCTOR}
                onValueChange={() => setRole(Roles.DOCTOR)}
              />
              <Text style={styles.label}>Doctor</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => register()}
          style={[styles.registerButton, styles.mt5]}
        >
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="white"
              style={styles.loadingIndicator}
            />
          )}
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.loginPageContainer}>
          <Text style={[styles.loginText]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.loginTextLink}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
