

export interface IParamsGetAllOrders {
  startDate?: string | null,
  endDate?: string | null,
  value?: number | null,
  clientName?: string | null,
}



export interface IItensOrders  {
  id: number ,
  nome: string,
  descricao: string,
  valor_unitario: string
}

export interface IResponseGetAllOrders {
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
