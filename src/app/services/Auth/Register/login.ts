import { axiosInstance } from '../../../constants/configs/axios';
import { IResponseAuth } from '../../../interfaces/services/Auth/interface.auth';
import { IParamsRegister } from '../../../interfaces/services/Auth/interface.register';

export const register = async (args: IParamsRegister) => {
  const { email, name, phone, password } = args;

  const data = {
    nome: name,
    email: email,
    telefone: phone,
    senha: password,
  };

  try {
    const response = await axiosInstance.post<IResponseAuth>('/cliente', data);
    return response;
  } catch (err) {
    console.error('Erro no cadastro do usuário', err);
    throw err;
  }
};
