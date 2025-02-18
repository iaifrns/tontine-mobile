import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="register" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="otp-validation" options={{headerShown: false}} />
        <Stack.Screen name="fogot-password-screen" options={{headerShown: false}} />
        <Stack.Screen name="code-verification" options={{headerShown: false}} />
        <Stack.Screen name="change-password" options={{headerShown: false}} />
    </Stack>
  );
};

export default AuthLayout;
