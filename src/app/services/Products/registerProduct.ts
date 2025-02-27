import { axiosInstance } from '../../constants/configs/axios';
import { IResponseApi } from '../../interfaces/services/interface.response.api';
import { IParamsRegisterProduct } from '../../interfaces/services/Products/interface.register.product';

export const RegisterProduct = async (args: IParamsRegisterProduct) => {
  const { descricao, nome, valor_unitario } = args;

  const data = {
    nome,
    descricao,
    valor_unitario,
  };

  try {
    const response = await axiosInstance.post<IResponseApi>('/itens', data);
    return response;
  } catch (err) {
    console.error('Erro no cadastro do produto', err);
    throw err;
  }
};
