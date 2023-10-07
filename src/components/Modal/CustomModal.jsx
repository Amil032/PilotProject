import { Modal } from "antd"

export const CustomModal=()=>{
    return (
        <Modal title="Basic Modal" 
        open={false} 
        onOk={()=>console.log('ok')} 
        onCancel={()=>console.log('cancel')}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
}