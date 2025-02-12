import { Stack } from "expo-router";
import React from "react";

const OnbordingLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="first-page" options={{headerShown: false}} />
        <Stack.Screen name="second-page" options={{headerShown: false}} />
        <Stack.Screen name="third-page" options={{headerShown: false}} />
    </Stack>
  );
};

export default OnbordingLayout;
