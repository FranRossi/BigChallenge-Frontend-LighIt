import * as React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "./UpdateInfoStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import axiosConfig from "../../helpers/axios/axiosConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DrawerStackParamList from "../../constants/navigation/DrawerParamListProps";

type FormData = {
  phone: string;
  weight: string;
  height: string;
  other_info: string;
};

interface Props
  extends NativeStackScreenProps<DrawerStackParamList, "UpdateInfo"> {}

export default function UpdateInfoScreen({ navigation }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      weight: "",
      height: "",
      other_info: "",
    },
  });

  const onSubmit = (data: FormData) => {
    axiosConfig
      .put("/update", {
        phone: data.phone,
        weight: data.weight,
        height: data.height,
        other_info: data.other_info,
      })
      .then(() => {
        Alert.alert("User updated!");
        navigation.navigate("Home", {});
      })
      .catch((error) => {
        Alert.alert("Error", error.response.data.message);
      });
  };

  return (
    <View style={styles.container}>
      {errors && Object.values(errors)[0] && (
        <Text style={styles.error}>{Object.values(errors)[0].message}</Text>
      )}
      <Text style={styles.label}>Phone number</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="phone"
        rules={{ required: "Phone number is required" }}
      />
      <Text style={styles.label}>Weight</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="weight"
        rules={{
          required: "Weight is required",
          pattern: {
            value: /^(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/,
            message: "Weight must be a number",
          },
        }}
      />
      <Text style={styles.label}>Height</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="height"
        rules={{
          required: "Height is required",
          pattern: {
            value: /^(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)$/,
            message: "Height must be a number",
          },
        }}
      />
      <Text style={styles.label}>Other information</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="other_info"
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[styles.updateButton, styles.mt5]}
      >
        <Text style={styles.updateButtonText}>Update Information</Text>
      </TouchableOpacity>
    </View>
  );
}
