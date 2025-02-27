import { axiosInstance } from "../../constants/configs/axios";
import { IParamsGetDetails } from "../../interfaces/services/interface.getDetails";
import { IResponseGetDetailsOrders } from "../../interfaces/services/Orders/interface.getdetails.orders";

export const getDetailsOrders = async (args: IParamsGetDetails) => {
  const {id} = args

  try {
    const response = await axiosInstance.get<IResponseGetDetailsOrders>(`/pedidos/${id}`);
    return response;

  } catch (err) {
    console.error('Erro na busca dos pedidos', err);
    throw err;
  }
};
