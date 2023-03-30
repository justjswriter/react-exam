import axios from "axios";
import { useAppDispatch } from "../../hooks";
import { fetchProducts } from "../../slices/productSlice";
import Modal from "../Modal";


const BtnDeleteProduct = (props:any) => {
    const dispatch = useAppDispatch();
    function deleteProduct(id:string){
        axios.delete('http://localhost:8080/products/' + id).then(() => alert("Товар удален")).then(()=> dispatch(fetchProducts()))
    }
  return (
    <>
      <input onClick={() => deleteProduct(props._id)} type="button" value="Удалить" />
    </>
  );
};

export default BtnDeleteProduct