import CustomInputBox from "@/components/common/CustomInputBox";
import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import { maskPhoneNumber } from "@/services/maskPhoneNumber";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPasswordScreen = () => {

    const num = "+237 654 909 444"
    const [maskNum, setMaskNum] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(()=>{
        setMaskNum(maskPhoneNumber(num))
    },[])

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full p-4 ">
        <View className="w-full h-full items-center justify-between">
          <View className="gap-6 w-full h-[80vh]">
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View className="gap-2">
              <Text className="text-[40px] font-bold">
                Réinitialiser le mot de passe
              </Text>
              <View>
                <Text className="font-semibold text-lg">
                  Mot de passe oublié ?
                </Text>
                <Text className=" text-gray-500">
                  Entrez votre numéro de téléphone correspondant à
                </Text>
              </View>
            </View>
            <Text className="text-2xl font-bold text-primary text-center">{maskNum}</Text>
            <CustomInputBox
                value={phone}
                label="Numero:"
                onChange={(e) => setPhone(e)}
              />
          </View>
          <CustomSubmitButton text="Soumettre" onPressAction={() => {router.push('/(auth)/code-verification')}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
