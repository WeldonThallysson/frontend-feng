import { axiosInstance } from '../../constants/configs/axios';
import { IResponseApi } from '../../interfaces/services/interface.response.api';
import {
  IParamsEditOrders,
  IResponseEditOrders,
} from '../../interfaces/services/Orders/interface.edit.orders';

export const editOrder = async (args: IParamsEditOrders) => {
  const { id, client_id, itens_id } = args;

  const data = {
    id,
    client_id,
    itens_id,
  };

  try {
    const response = await axiosInstance.put<IResponseEditOrders>(`/pedidos/${id}`, data);
    return response;
  } catch (err) {
    console.error('Erro na atualização do pedido', err);
    throw err;
  }
};
