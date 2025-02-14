import CustomInputBox from "@/components/common/CustomInputBox";
import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import { Colors } from "@/constants/Colors";
import { ResgisterDataType } from "@/types/registerDataType";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterPage = () => {
  const [formData, setFormData] = useState<ResgisterDataType>({
    name: "",
    email: "",
    password: "",
    number: "",
    acceptConditions: false,
  });

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full">
        <View className="w-full h-[95vh] p-4 justify-between">
          {/* content section */}
          <View className="gap-6">
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <Text className="text-[40px] font-bold">Créer Un Compte</Text>
              <Text className="text-gray-400 text-lg font-semibold">
                Entrez les détails de votre compte ici ou{" "}
                <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                  <Text className="text-primary font-semibold">connectez-vous</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View className="gap-2">
              <CustomInputBox
                value={formData.name}
                label="Nom:"
                onChange={(e) => setFormData({ ...formData, name: e })}
              />
              <CustomInputBox
                value={formData.number}
                label="Numero de Telephone:"
                onChange={(e) => setFormData({ ...formData, number: e })}
              />
              <CustomInputBox
                value={formData.email}
                label="Email:"
                onChange={(e) => setFormData({ ...formData, email: e })}
              />
              <CustomInputBox
                value={formData.password}
                label="Mot de Passe:"
                onChange={(e) => setFormData({ ...formData, password: e })}
              />
              <View className="flex-row gap-2 items-center mt-2">
                <Checkbox
                  value={formData.acceptConditions}
                  onValueChange={(e) =>
                    setFormData({ ...formData, acceptConditions: e })
                  }
                  color={
                    formData.acceptConditions ? Colors.primary : "undefined"
                  }
                />
                <Text>J'accepte les termes et conditions</Text>
              </View>
            </View>
          </View>
          {/* custom button section */}
          <CustomSubmitButton text="Soumettre" onPressAction={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterPage;
