import { axiosInstance } from "../../constants/configs/axios";
import { IResponseGetDetailsClient } from "../../interfaces/services/Clients/interface.getdetails.client";
import { IParamsGetDetails } from "../../interfaces/services/interface.getDetails";

export const getDetailsClients = async (args: IParamsGetDetails) => {
  const { id } = args
  try {
    const response = await axiosInstance.get<IResponseGetDetailsClient>(`/cliente/${id}`);
    return response;

  } catch (err) {
    console.error('Erro na busca pelos detalhes do usuário', err);
    throw err;
  }
};
