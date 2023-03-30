import { useState } from "react";
import Modal from "../Modal";
import ModalSellProduct from "../ModalSellProduct/ModalSellProduct";

const BtnSellProduct = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <input type="button" onClick={() => setShowModal(true)} value="Продать" />
      {showModal ? (
        <Modal>
          <ModalSellProduct _id={props._id} close={closeModal}/>
        </Modal>
      ) : null}
    </>
  );
};

export default BtnSellProduct;
