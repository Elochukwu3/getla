type Data = {
    email: string,
    phone_number: string,
    first_name: string,
    message: string,
}
type Result = {
    responseData: any;
    error: Error | null;
    isLoading: boolean;
  };
export type {Data, Result}