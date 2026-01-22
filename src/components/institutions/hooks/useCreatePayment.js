import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useCreatePayment = () => {
  const queryClient = useQueryClient();

  const config = {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImU1ZDhjYTc3LTU4MjgtNDVkNy05MmY2LTZjYTAxODIzNzQ3NiIsImNvbXBhbnlJZCI6IjY0NmVkYWYyMDI5OTNjMDAwODhkMDIwYSIsImlhdCI6MTY4Njc0NzQzNiwiZXhwIjo0ODQyNDIxMDM2fQ.7RzacNZcu2TwCDi8JOvAzIL2SjJ3e5aA7AGalpbVwBw",
      "Access-Control-Allow-Origin": "true",
    },
  };

  const createPayment = async (obj) => {
    try {
      const response = await axios.post("/api/transactions", obj, config);
      return response.data;
    } catch (error) {
      throw new Error("An error occurred");
    }
  };

  return useMutation(createPayment, {
    onSuccess: async () => {
      queryClient.invalidateQueries();
    },
    onError: async (error) => {
      console.log(error);
    },
  });
};

export default useCreatePayment;
