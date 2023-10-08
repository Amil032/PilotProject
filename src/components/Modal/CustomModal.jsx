import { Input, Modal } from "antd";
import { Select } from "antd";
import classes from './style.module.css'
export const CustomModal = ({ setShowModal, showModal ,changeHandler}) => {
  return (
    <Modal
      title="Edit row"
      open={showModal}
      onOk={() => console.log("ok")}
      onCancel={() => setShowModal(false)}
    >
      <div className={classes.content}>
        <label>Len məlumatı girin</label>
        <Input type="number" size="large"
         onChange={(e)=>changeHandler(e.target.value,'len')}
        />
        <label>Status seçın </label>
        <Select
        size="large"
          defaultValue={0}
         
          onChange={(value)=>changeHandler(value,'status')}
        //   style={{ width: 120 }}
          //   onChange={handleChange}
          options={[
            { value: 0, label: "0" },
            { value: 1, label: "1" },
            { value: 2, label: "2" },
           
          ]}
          
        />
      </div>
    </Modal>
  );
};
