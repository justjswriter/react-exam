import axios from "axios";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchProducts, fetchCash } from "../../slices/productSlice";

const ModalAddNewProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data)
  const [name, setName] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/products`, {
        product_name: name,
        sell_price: parseInt(sellPrice),
        buy_price: parseInt(buyPrice),
      })
      .then(() => alert("Товар добавлен"))
      .then(() => dispatch(fetchProducts()).then(props.close));
  };
  return (
    <div className="modal-content">
      <p className="modal-name">Добавить новый продукт</p>
      <form onSubmit={handleClick}>
        <label>
          {" "}
          Наименование товара :{" "}
          <input
            placeholder="Введите наименование"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Цена продажи:{" "}
          <input
            type={"number"}
            placeholder="Введите цену продажи"
            min={1}
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
          />
        </label>
        <label>
          Цена покупки:{" "}
          <input
            placeholder="Введите цену покупки"
            min={1}
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
          />
        </label>
        {products.some((product) => product.product_name.toLowerCase() === name.toLowerCase()) ? <p>Продукт с таким название уже существует</p> : null}
        <button
          className="modal-Btn"
          disabled={
            name.length < 2 ||
            isNaN(parseInt(sellPrice)) ||
            isNaN(parseInt(buyPrice)) ||
            products.some((product) => product.product_name.toLowerCase() === name.toLowerCase())
          }
        >
          Добавить
        </button>
      </form>
      <input
        className="modal-Btn"
        type="button"
        value="отмена"
        onClick={props.close}
      />
    </div>
  );
};

export default ModalAddNewProduct;
