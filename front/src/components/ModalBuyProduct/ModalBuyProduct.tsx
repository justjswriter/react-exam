import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchProducts, fetchCash } from "../../slices/productSlice";

const ModalBuyProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const cashAmount = useAppSelector((state) => state.products.cashAmount);
  const sellingProduct = useAppSelector((state) =>
    state.products.data.filter((product) => product._id === props._id)
  );
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [summ, setSumm] = useState("");

  function UpdateData() {
    if (sellingProduct.length !== 0) {
      setPrice(sellingProduct[0].buy_price.toString());
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
      .put(`http://localhost:8080/products/buy/` + sellingProduct[0]._id, {
        buyAmount: parseInt(amount),
        newBuyPice: parseInt(price),
      })
      .then(() => alert("Покупка совершена"))
      .then(() =>
        dispatch(fetchProducts())
          .then(() => dispatch(fetchCash()))
          .then(props.close)
      );
  };
  return (
    <div className="modal-content">
      <p className="modal-name">Купить продукт</p>
      <form onSubmit={handleClick}>
        <label>
          Наименование продукта:{" "}
          <input
            placeholder="Product name"
            disabled
            value={sellingProduct[0].product_name}
          />
        </label>
        <label>
          Цена покупки:{" "}
          <input
            type={"number"}
            placeholder="Цена покупки"
            min={1}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Количество товара: 
          <input
            placeholder="Количество товара"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        {parseInt(summ) > cashAmount ? <p>Недостаточно средств на счету для покупки</p> : null}
        <p className="summ-p">Итого: {isNaN(parseInt(summ)) ? 0 : summ}</p>

        <button className="modal-Btn" disabled={parseInt(summ) > cashAmount || isNaN(parseInt(amount))}>Купить</button>
      </form>
      <input className="modal-Btn" type="button" value="отмена" onClick={props.close} />
    </div>
  );
};

export default ModalBuyProduct;
