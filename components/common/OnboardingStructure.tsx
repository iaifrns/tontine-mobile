import { icons } from "@/constants";
import { onboardingStructureType } from "@/types/onboardingStructureType";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Circle = ({ color }: { color: string }) => {
  return <View className={`h-2 w-5 rounded-full ${color}`}></View>;
};

interface StructureType {
  data: onboardingStructureType;
}

const OnboardingStructure: React.FC<StructureType> = ({ data }) => {
  return (
    <View className="items-center justify-between w-full h-[90vh]">
      <View className="items-center w-full h-[90%] justify-center">
        <View className="gap-6 items-center w-full">
          <Image
            source={data.image}
            className="w-[280px] h-[287px]"
            resizeMode="contain"
          />
          <Text className="font-bold text-[34px] text-center">
            {data.title}
          </Text>
          <Text className="text-center text-xl">{data.desc}</Text>
        </View>
      </View>

      <View className="w-full relative items-center justify-center mt-16">
        <View className="flex-row gap-2">
          {[0, 1, 2].map((item) => (
            <Circle
              color={data.active == item ? "bg-primary" : "bg-secondary"}
            />
          ))}
        </View>
        <View className="w-full absolute flex-row justify-between items-center">
          {data.active == 0 ? (
            <View></View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <View className="flex-row items-center gap-2">
                <Image
                  source={icons.back}
                  className="h-4 w-4"
                  resizeMode="contain"
                />
                <Text className="text-primary">Prev</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => router.push(data.navigateTo)}>
            <View className="flex-row items-center gap-2">
              <Text className="text-primary">Next</Text>
              <Image
                source={icons.next}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingStructure;
