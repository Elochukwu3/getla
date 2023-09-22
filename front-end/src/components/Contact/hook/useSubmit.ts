import useContact from "./useContact";

const useSubmit = () => {
  const { responseData, error, isLoading, sendData } = useContact();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).Mail.value;
    const topic = (e.target as HTMLFormElement).Topic.value;
    const firstName = (e.target as HTMLFormElement).FirstName.value;
    const message = (e.target as HTMLFormElement).message.value;

    const data = {
      email: email,
      phone_number: "08132531639",
      first_name: firstName,
      message: message,
    };
    if (email && topic && firstName && message) {
      sendData(data);
    }
  };
  return { responseData, error, isLoading, submitForm };
};

export default useSubmit