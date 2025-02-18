import VerificationContent from "@/components/ui/VerifiactionContent";
import { router } from "expo-router";
import React, { useState } from "react";

const CodeVerification = () => {
    const [otpText, setOtpText] = useState("");

    return (
      <VerificationContent
        submit={() => {
          router.push("/(auth)/change-password");
        }}
        setOtpText={(e) => setOtpText(e)}
        number="+237 655 456 705"
      />
    );
};

export default CodeVerification;
