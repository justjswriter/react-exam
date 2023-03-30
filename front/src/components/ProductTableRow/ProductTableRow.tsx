import { FC } from "react";
import { IProducts } from "../../types";
import BtnBuyProduct from "../BtnBuyProduct/BtnBuyProduct";
import BtnDeleteProduct from "../BtnDeleteProduct/BtnDeleteProduct";
import BtnSellProduct from "../BtnSellProduct/BtnSellProduct";

const ProductTableRow: FC<IProducts> = (props) => {
  return (
    <tr>
      <td>{props.product_name}</td>
      <td>{props.product_amount}</td>
      <td>{props.sell_price}</td>
      <td>{props.buy_price}</td>
      <td className="btn-cell"><BtnBuyProduct _id={props._id}/><BtnSellProduct _id={props._id}/><BtnDeleteProduct _id={props._id}/></td>
    </tr>
  );
};

export default ProductTableRow;
