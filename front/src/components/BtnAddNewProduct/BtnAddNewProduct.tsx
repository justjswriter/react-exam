import { useState } from "react";
import Modal from "../Modal";
import ModalAddNewProduct from "../ModalAddNewProduct/ModalAddNewProduct";

const BtnAddNewProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <input className="add-new-btn" type="button" value="Добавить новый продукт" onClick={() => setShowModal(true)}/>
      {showModal ? (
        <Modal>
          <ModalAddNewProduct close={closeModal}/>
        </Modal>
      ) : null}
    </div>
  );
};

export default BtnAddNewProduct;
