import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="w-full h-full">
        <View className="w-full h-full justify-center items-center">
          <Text>Login page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
