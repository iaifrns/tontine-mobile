import ResponseStatus from "@/enum/ResponseStatus";
import { ResponseType } from "@/types/responseType";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const useCheckIfIsUserFirstTime = (): ResponseType => {
  const [response, setResponse] = useState<ResponseType>({
    status: ResponseStatus.LOADING,
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        setResponse({
          status: !token ? ResponseStatus.SUCCESS : ResponseStatus.ERROR,
        });
      } catch (e) {
        console.log("error in the code: ", e);
        setResponse({ status: ResponseStatus.ERROR });
      }
    };

    fetchToken();
  }, []);

  return response;
};

export default useCheckIfIsUserFirstTime;
