

export interface IItensOrders  {
  id: number ,
  nome: string,
  descricao: string,
  valor_unitario: string
}

export interface IResponseGetDetailsOrders {
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
