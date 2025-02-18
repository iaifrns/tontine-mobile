import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";
import React, { useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContentType {
  submit: () => void;
  number: string;
  setOtpText: (e: string) => void;
}

const VerificationContent: React.FC<ContentType> = ({
  submit,
  number,
  setOtpText
}) => {
  const otpRef = useRef(null);

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full p-4">
        <View className="w-full h-full justify-between">
          <View className="w-full h-[80vh] gap-6">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <View className="gap-2">
              <Text className="text-[40px] font-bold">
                Vérifier Le Numéro De Téléphone
              </Text>
              <Text className="text-primary">
                Entrez le code à 6 chiffres envoyé par SMS
              </Text>
            </View>
            <View className="mt-2">
              <Text className="font-semibold text-2xl">Numero</Text>
              <View className="flex-row gap-2">
                <Text className="border-b text-xl">{number}</Text>
                <View className="flex-row items-center">
                  <Ionicons name="pencil" size={24} color="black" />
                  <Text className="font-semibold text-primary text-xl">
                    Modifier
                  </Text>
                </View>
              </View>
            </View>
            <View className="w-full justify-center items-center mt-4 gap-2">
              <OTPTextInput
                ref={otpRef}
                inputCount={6}
                keyboardType="numeric"
                autoFocus={true}
                tintColor={Colors.primary}
                offTintColor={"#000"}
                textInputStyle={{
                  borderWidth: 1,
                  padding: 2,
                  borderRadius: 16,
                  borderBottomWidth: 1,
                  width: 50,
                  height: 75,
                }}
                handleTextChange={(e) => setOtpText(e)}
              />
              <Text className="text-primary text-xl text-center">
                Renvoyer le code ?
              </Text>
            </View>
          </View>
          <CustomSubmitButton
            text="Soumettre"
            onPressAction={submit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationContent;
