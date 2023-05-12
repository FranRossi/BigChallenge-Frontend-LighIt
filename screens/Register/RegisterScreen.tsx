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
import { RootStackParamList } from "../../helpers/navigation/NavigationProps";

export default function RegisterScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
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
      .then((response) => {
        Alert.alert("User created! Please login.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("PATIENT");
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
      <View style={{ marginTop: 130, width: 260 }}>
        <View style={{ marginTop: 40 }}>
          {error && <Text style={{ color: "red" }}>{error}</Text>}
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
            secureTextEntry={true}
          />
          <TextInput
            style={[styles.inputBox, styles.mt4]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <View style={styles.mt4}>
            <View style={styles.checkBoxRow}>
              <CheckBox
                value={role === "PATIENT"}
                onValueChange={() => setRole("PATIENT")}
              />
              <Text style={styles.label}>Patient</Text>
            </View>
            <View style={styles.checkBoxRow}>
              <CheckBox
                value={role === "DOCTOR"}
                onValueChange={() => setRole("DOCTOR")}
              />
              <Text style={styles.label}>Doctor</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => register()}
          style={[styles.loginButton, styles.mt5]}
        >
          {isLoading && (
            <ActivityIndicator
              size="small"
              color="white"
              style={{ marginRight: 18 }}
            />
          )}
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          <Text style={[styles.registerText]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.registerTextLink}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
