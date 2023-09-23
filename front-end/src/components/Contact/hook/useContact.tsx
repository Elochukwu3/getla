import { useState } from "react";
import { MyCustomError } from "@assets/func/error";
import { CONTACT_URL } from "@assets/func/endPoint";
import { Data, Result } from "./type";

const useContact = () => {

  const [result, setResult] = useState<Result>({
    responseData: null,
    error: null,
    isLoading: false,
  });

  const sendData = async (data: Data) => {

    setResult({ ...result, isLoading: true });
    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new MyCustomError("Network response was not ok");
      }

      const responseData = await response.json();
      setResult({ responseData, error: null, isLoading: false });
    } catch (error) {
      const newErr = error as Error;
      setResult({ responseData: null, error: newErr, isLoading: false });
    }

  };

  return { ...result, sendData };
};

export default useContact;
