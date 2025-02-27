


import { axiosInstance } from '../../constants/configs/axios';
import { IParamsDelete } from '../../interfaces/services/interface.delete';
import { IResponseApi } from '../../interfaces/services/interface.response.api';


export const deleteProduct = async (args: IParamsDelete) => {
  const { id } = args;

  try {
    const response = await axiosInstance.delete<IResponseApi>(`/itens/${id}`);
    return response;

  } catch (err) {
    console.error('Erro na exclusão do produto', err);
    throw err;
  }
};
