import { axiosInstance } from "../../constants/configs/axios";
import { IResponseAuth } from "../../interfaces/services/Auth/interface.auth";
import { IParamsRegister } from "../../interfaces/services/Auth/interface.register";
import { IParamsRegisterOrders } from "../../interfaces/services/Orders/interface.register.orders";

export const RegisterOrder = async (args: IParamsRegisterOrders) => {
  const { client_id,itens_id } = args;

  const data = {
    client_id,itens_id
  };

  try {
    const response = await axiosInstance.post<IResponseAuth>('/pedidos', data);
    return response;
  } catch (err) {
    console.error('Erro no cadastro do usuário', err);
    throw err;
  }
};
