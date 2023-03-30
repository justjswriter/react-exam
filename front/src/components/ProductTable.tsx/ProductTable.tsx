import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchCash, fetchProducts } from "../../slices/productSlice";
import ProductTableRow from "../ProductTableRow/ProductTableRow";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCash())
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Наименование товара</td>
          <td>Количество</td>
          <td>Цена продажи</td>
          <td>Цена покупки</td>
          <td>Действия</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductTableRow key={product._id} {...product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
