import { axiosInstance } from "../../../constants/configs/axios"
import { IParamsAuth, IResponseAuth } from "../../../interfaces/services/Auth/interface.auth"


export const login = async (args: IParamsAuth) => {
  const {email,password} = args

  const data = {
    email,
    password
  }

  try {
    const response = await axiosInstance.post<IResponseAuth>('/auth/login', data)
    return response
  } catch( err) {
    console.error("Erro na autenticação", err)
    throw err
  }
}
