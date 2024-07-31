import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { isAxiosError } from "axios";
import api from "../services/api";
import { fetchHeaders } from "@/utils";

export function useCreatePayable() {
  const router = useRouter()
  const { mutateAsync } = useMutation({
    mutationFn: async (body : any) => {
      console.log("Body recebido no mutationFn():", body);
      const response = await api.post("/integrations/payable", body, {
        headers: fetchHeaders(),
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Cadastro realizado com sucesso!");
      router.push('/list-payable');
    },
    onError(error) {
      console.log("Caiu no onError do useCreatePayable");
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  return {
    createPayable: mutateAsync,
  };
}
