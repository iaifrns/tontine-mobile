import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomSubmitButton = ({text, onPressAction} : {text: string, onPressAction: () => void}) => {
  return (
    <TouchableOpacity className="w-full p-4 bg-primary rounded-lg" onPress={onPressAction}>
        <Text className="text-xl font-bold text-white text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomSubmitButton;
