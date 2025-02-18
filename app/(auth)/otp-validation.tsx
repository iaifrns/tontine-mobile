import React, { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPTextInput from "react-native-otp-textinput";

const OtpValidation = () => {
  const otpRef = useRef(null);

  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full w-full">
        <View className="w-full h-full justify-center items-center">
          <OTPTextInput
            ref={otpRef}
            inputCount={6}
            keyboardType="numeric"
            autoFocus={true}
          />
          <Text>otp validation screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpValidation;
