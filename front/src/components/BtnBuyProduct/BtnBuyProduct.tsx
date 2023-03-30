import { useState } from "react";
import Modal from "../Modal";
import ModalBuyProduct from "../ModalBuyProduct/ModalBuyProduct";

const BtnBuyProduct = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <input type="button" onClick={() => setShowModal(true)} value="Купить" />
      {showModal ? (
        <Modal>
          <ModalBuyProduct  _id={props._id} close={closeModal}/>
        </Modal>
      ) : null}
    </>
  );
};

export default BtnBuyProduct;
