import OnboardingStructure from "@/components/common/OnboardingStructure";
import { onboardingData } from "@/constants";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const firstPage = () => {
  return (
    <SafeAreaView className="h-full w-full px-4">
      <View className="h-full w-full items-center justify-center">
        <OnboardingStructure data={onboardingData[0]} />
      </View>
    </SafeAreaView>
  );
};

export default firstPage;
