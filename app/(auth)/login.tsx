import CustomInputBox from "@/components/common/CustomInputBox";
import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import { LoginDataType } from "@/types/loginType";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [formData, setFormData] = useState<LoginDataType>({
    number: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="w-full h-full p-4">
        <View className="w-full h-full justify-between">
          <View className="w-full h-[80vh] gap-8">
            <View>
              <Text className="text-[40px] font-bold">Bon Retour !</Text>
              <Text className="text-lg">
                Nous sommes heureux de vous revoir
              </Text>
            </View>
            <View className="gap-4">
              <CustomInputBox
                value={formData?.number}
                label="Numero:"
                onChange={(e) => setFormData({ ...formData, number: e })}
              />
              <CustomInputBox
                value={formData.password}
                label="Mot de passe:"
                onChange={(e) => setFormData({ ...formData, password: e })}
              />
              <View className="flex-row items-center">
                <Text className="text-[16px] items-center">
                  Si vous n'avez pas de compte,{" "}
                </Text>
                <TouchableOpacity
                  className="p-0 m-0"
                  onPress={() => {
                    router.push("/(auth)/register");
                  }}
                >
                  <Text className="text-primary text-lg">inscrivez-vous</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="gap-2">
            <CustomSubmitButton text="Soumettre" onPressAction={() => {}} />
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/fogot-password-screen");
              }}
            >
              <Text className="text-lg text-center text-primary font-semibold">
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
