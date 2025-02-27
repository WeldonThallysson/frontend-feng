


import { axiosInstance } from '../../constants/configs/axios';
import { IParamsDelete } from '../../interfaces/services/interface.delete';
import { IResponseApi } from '../../interfaces/services/interface.response.api';


export const DeleteClients = async (args: IParamsDelete) => {
  const { id } = args;

  try {
    const response = await axiosInstance.delete<IResponseApi>(`/cliente/${id}`);
    return response;

  } catch (err) {
    console.error('Erro na autenticação', err);
    throw err;
  }
};
