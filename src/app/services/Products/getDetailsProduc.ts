import { axiosInstance } from '../../constants/configs/axios';
import { IParamsGetDetails } from '../../interfaces/services/interface.getDetails';
import { IResponseGetDetailsProduct } from '../../interfaces/services/Products/interface.getdetails.product';

export const getDetailsProduct = async (args: IParamsGetDetails) => {
  const {id} = args

  try {
    const response = await axiosInstance.get<IResponseGetDetailsProduct>(`/itens/${id}`);
    return response;
  } catch (err) {
    console.error('Erro na atualização do produto', err);
    throw err;
  }
};
