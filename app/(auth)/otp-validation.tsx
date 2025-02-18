import VerificationContent from "@/components/ui/VerifiactionContent";
import { router } from "expo-router";
import React, { useState } from "react";

const OtpValidation = () => {
  const [otpText, setOtpText] = useState("");

  return (
    <VerificationContent
      submit={() => {
        router.push("/(auth)/login");
      }}
      setOtpText={(e) => setOtpText(e)}
      number="+237 655 456 765"
    />
  );
};

export default OtpValidation;
