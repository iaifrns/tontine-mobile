import React from "react";
import { Text, TextInput, View } from "react-native";

const CustomInputBox = ({label, value, onChange} : {label: string, value: string, onChange: (e:string) => void}) => {
  return (
    <View>
      <Text className="font-semibold text-lg">{label}</Text>
      <TextInput className="border border-black rounded-lg p-3 text-lg" value={value} onChangeText={onChange} />
    </View>
  );
};

export default CustomInputBox;
