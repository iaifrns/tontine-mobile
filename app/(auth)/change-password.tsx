import CustomInputBox from "@/components/common/CustomInputBox";
import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full p-4 ">
        <View className="w-full h-full items-center justify-between">
          <View className="gap-6 w-full h-[80vh]">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View className="gap-2">
              <Text className="text-[40px] font-bold">
                Réinitialiser le mot de passe
              </Text>
            </View>
            <View className="gap-4">
              <CustomInputBox
                value={data.password}
                label="Nouveau mot de passe:"
                onChange={(e) => setData({ ...data, password: e })}
              />
              <CustomInputBox
                value={data.confirmPassword}
                label="Confirmer le mot de passe:"
                onChange={(e) => setData({ ...data, confirmPassword: e })}
              />
            </View>
          </View>
          <CustomSubmitButton
            text="Soumettre"
            onPressAction={() => {
              router.replace("/(auth)/login");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
