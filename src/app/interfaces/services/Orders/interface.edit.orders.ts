


export interface IParamsEditOrders {
  id: number;
   client_id: number,
   itens_id: number[]
}

export interface IItensOrders  {
  id: number ,
  nome: string,
  descricao: string,
  valor_unitario: string
}
export interface IResponseEditOrders{
     id: string,
     data: string,
     cliente: {
        id: number,
        nome: string,
        email: string,
        telefone: string,
        isAdmin: boolean
    },
    itens: IItensOrders[]
}
