
interface OrderDTO{
    productId:number,
    quantity:number
  }
  
  interface MakeOrderDTO{
    user_phone:string,
    address : string,
    dto : OrderDTO[]
  }

  export type {OrderDTO,
    MakeOrderDTO}