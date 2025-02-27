import { axiosInstance } from "../../constants/configs/axios";
import { IParamsEditClient } from "../../interfaces/services/Clients/interface.edit.client";
import { IResponseApi } from "../../interfaces/services/interface.response.api";

export const editClients = async (args: IParamsEditClient) => {
  const { id, email,name,password,phone } = args;

  const data = {
    nome: name,
    email: email,
    telefone:phone,
    senha: password
  }

  try {
    const response = await axiosInstance.put<IResponseApi>(`/cliente/${id}`, data);
    return response;

  } catch (err) {
    console.error('Erro na atualização do usuário', err);
    throw err;
  }
};
