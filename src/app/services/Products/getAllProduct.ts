import { axiosInstance } from '../../constants/configs/axios';
import { IResponseItensProduct } from '../../interfaces/services/Products/interface.getall.product';

export const getAllProduct = async () => {

  try {
    const response = await axiosInstance.get<IResponseItensProduct[]>("/itens");
    return response;
  } catch (err) {
    console.error('Erro na atualização do produto', err);
    throw err;
  }
};
