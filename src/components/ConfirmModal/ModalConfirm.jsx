import { Modal } from "antd";
import classes from "./style.module.css";
export const CustomModal = ({ setShowModal, showModal, confirmHandler }) => {
  return (
    <Modal
      title="Edit row"
      open={showModal}
      onOk={confirmHandler}
      onCancel={() => {
        setShowModal(false);
      }}
    >
      <div className={classes.content}>
        <p>Əminsinizmi ?</p>
      </div>
    </Modal>
  );
};
