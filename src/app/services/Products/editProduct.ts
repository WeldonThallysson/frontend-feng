import { axiosInstance } from '../../constants/configs/axios';
import { IResponseApi } from '../../interfaces/services/interface.response.api';
import { IParamsEditProduct } from '../../interfaces/services/Products/interface.edit.product';

export const editProduct = async (args: IParamsEditProduct) => {
  const { id, descricao, nome, valor_unitario } = args;

  const data = {
    id,
    descricao,
    nome,
    valor_unitario,
  };

  try {
    const response = await axiosInstance.put<IResponseApi>(
      `/itens/${id}`,
      data
    );
    return response;
  } catch (err) {
    console.error('Erro na atualização do produto', err);
    throw err;
  }
};
