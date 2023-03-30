import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchCash, fetchProducts } from "../../slices/productSlice";
import { fetchOperations } from "../../slices/operationSlice";

const StockInfo = () => {
  const dispatch = useAppDispatch();
  const cashAmount = useAppSelector((state) => state.products.cashAmount);
  const products = useAppSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCash());
    dispatch(fetchOperations());
  }, []);
  if (products.length === 0) {
    return <p>Загрузка данных</p>;
  }
  return (
    <div>
      <div>
        <h3>Информация о складе</h3>
        <p>
          Количество денег на счету:{" "}
          <span className="stock-info"> {cashAmount} </span>тенге
        </p>
        <p>
          Общая ценность товаров на складе:{" "}
          <span className="stock-info">
            {products.reduce((acc, product) => {
              return acc + product.sell_price;
            }, 0)}
          </span>{" "}
          тенге
        </p>
        <p>
          Количество типов товара на складке:{" "}
          <span className="stock-info">{products.length}</span>{" "}шт.
        </p>
        <p>
          Самый дорогой товар на складе:{" "}
          <span className="stock-info">
            {
              products.reduce((prev, curr) =>
                prev.sell_price > curr.sell_price ? prev : curr
              ).product_name
            }{" "}
          </span>
          - цена:{" "}
          <span className="stock-info">
            {Math.max(...products.map((pr) => pr.sell_price))}
          </span>{" "}
          тенге
        </p>
        <p>
          Самый дешевый товар на складе:{" "}
          <span className="stock-info">
            {
              products.reduce((prev, curr) =>
                prev.sell_price < curr.sell_price ? prev : curr
              ).product_name
            }
          </span>{" "}
          - цена:{" "}
          <span className="stock-info">
            {Math.min(...products.map((pr) => pr.sell_price))}
          </span>{" "}
          тенге
        </p>
        <p>
          Товар с наибольшим количеством:{" "}
          <span className="stock-info">
            {
              products.reduce((prev, curr) =>
                prev.product_amount > curr.product_amount ? prev : curr
              ).product_name
            }
          </span>{" "}
          - Количество:{" "}
          <span className="stock-info">
            {Math.max(...products.map((pr) => pr.product_amount))}шт.
          </span>
        </p>
        <p>
          Товар с наименьшим количеством:{" "}
          <span className="stock-info">
            {
              products.reduce((prev, curr) =>
                prev.product_amount < curr.product_amount ? prev : curr
              ).product_name
            }
          </span>{" "}
          - Количество:{" "}
          <span className="stock-info">
            {Math.min(...products.map((pr) => pr.product_amount))} шт.
          </span>
        </p>
      </div>
    </div>
  );
};

export default StockInfo;
