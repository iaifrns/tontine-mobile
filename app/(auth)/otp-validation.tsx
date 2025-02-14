import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpValidation = () => {
  return (
    <SafeAreaView className="h-full w-full">
        <ScrollView className="h-full w-full">
            <View className="w-full h-full justify-center items-center">
                <Text>otp validation screen</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default OtpValidation;
