import { axiosInstance } from "../../constants/configs/axios";

import { IParamsGetAllOrders, IResponseGetAllOrders } from "../../interfaces/services/Orders/interface.getall.orders";

export const getAllOrders = async (args: IParamsGetAllOrders) => {

  const {clientName,endDate,startDate,value} = args

  const params = {
    ...(startDate && {startDate}),
    ...(endDate && {endDate}),
    ...(clientName && {clienteName: clientName}),
    ...(value && {value: value})
  }

  try {
    const response = (await axiosInstance.get<IResponseGetAllOrders[]>("/pedidos", {params}));
    return response;

  } catch (err) {
    console.error('Erro na busca dos pedidos', err);
    throw err;
  }
};
