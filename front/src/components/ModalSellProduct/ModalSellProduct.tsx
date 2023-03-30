import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchCash, fetchProducts } from "../../slices/productSlice";

const ModalSellProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const buyingProduct = useAppSelector((state) =>
    state.products.data.filter((product) => product._id === props._id)
  );
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [summ, setSumm] = useState("");

  function UpdateData() {
    if (buyingProduct.length !== 0) {
      setPrice(buyingProduct[0].sell_price.toString());
    }
  }

  useEffect(() => {
    UpdateData();
  }, []);

  useEffect(() => {
    setSumm((parseInt(amount) * parseInt(price)).toString());
  }, [amount, price]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/products/sell/` + buyingProduct[0]._id, {
        sellAmount: parseInt(amount),
        newSellPice: parseInt(price),
      })
      .then(() => alert("Продажа совершена"))
      .then(() =>
        dispatch(fetchProducts())
          .then(() => dispatch(fetchCash()))
          .then(props.close)
      );
  };
  return (
    <div className="modal-content">
      <p className="modal-name">Продать продукт</p>
      <form onSubmit={handleClick}>
        <label>
          Наименовае продукта:
          <input
            placeholder="Наименование продутка"
            disabled
            value={buyingProduct[0].product_name}
          />
        </label>
        <label>
          Цена продажи:
          <input
            placeholder="Цена продажи"
            min={1}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Количество товара:
          <input
            type={"number"}
            max={buyingProduct[0].product_amount}
            min={1}
            placeholder="Количество товара"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <p className="summ-p">Итого: {isNaN(parseInt(summ)) ? 0 : summ} </p>
        {buyingProduct[0].product_amount < parseInt(amount)  ? <p>Недостаточно товара</p> : null}
        <button className="modal-Btn" disabled={isNaN(parseInt(amount)) || buyingProduct[0].product_amount < parseInt(amount)}>Продать</button>
      </form>
      <input className="modal-Btn" type="button" value="отмена" onClick={props.close} />
    </div>
  );
};

export default ModalSellProduct;
