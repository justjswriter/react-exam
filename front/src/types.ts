export interface IProducts{
    _id: string,
    product_name: string,
    sell_price: number,
    buy_price: number,
    product_amount: number,
    __v: number
}

export interface IOperation{
    _id: string,
    type: string,
    name: string,
    date: Date,
    product_amount: number,
    product_summ: number
}

