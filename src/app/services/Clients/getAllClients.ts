import { axiosInstance } from "../../constants/configs/axios";
import { IResponseGetAllClient } from "../../interfaces/services/Clients/interface.getall.client";

export const getAllClients = async () => {
  try {
    const response = await axiosInstance.get<IResponseGetAllClient[]>("/cliente");
    return response;

  } catch (err) {
    console.error('Erro na busca do usuário', err);
    throw err;
  }
};
