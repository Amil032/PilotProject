import "./App.css";
import { useState } from "react";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { UploadButton } from "./components/TableControl/UploadButton";
import { TableControl } from "./components/TableControl/TableControl";
import { CustomModal } from "./components/Modal/CustomModal";
import { TabulatorTable } from "./components/Table/Table";
import { Table2 } from "./components/table2/Tabel2";

function App() {
  const [parseData, setParsedData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [value,setValue]=useState({})
  const changeHandler=(value,name)=>{
     setValue(prev=>({...prev,[name]:value}))
  }
  console.log(value)
  
  return (
    <div className="App">
      <TableControl setParsedData={setParsedData} setShowModal={setShowModal} />
      <div
        style={{
          width: "80%",
          backgroundColor: "#555555",
          padding: "10px",
          height: "450px",
          marginTop: "20px",
        }}
      >
        {/* <TabulatorTable parseData={parseData} setShowModal={setShowModal} /> */}
        <Table2  parseData={parseData} setShowModal={setShowModal}/>
      </div>
      <CustomModal showModal={showModal} setShowModal={setShowModal} changeHandler={changeHandler} />
    </div>
  );
}

export default App;
