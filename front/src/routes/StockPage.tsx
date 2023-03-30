import BtnAddNewProduct from "../components/BtnAddNewProduct/BtnAddNewProduct";
import ProductTable from "../components/ProductTable.tsx/ProductTable";
import { useAppSelector } from "../hooks";
import "../styles/modals.css"

const StockPage = () => {
  const cashAmount = useAppSelector((state) => state.products.cashAmount);

  return (
    <div className="page">
      <p className="page-name">Склад</p>
      <p>Денег на счету: {cashAmount}</p>

      <BtnAddNewProduct />
      <ProductTable />
    </div>
  );
};

export default StockPage;
