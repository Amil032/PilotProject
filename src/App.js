import "./App.css";
import {useState} from 'react'
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { UploadButton } from "./components/TableControl/UploadButton";
import { TableControl } from "./components/TableControl/TableControl";
import { CustomModal } from "./components/Modal/CustomModal";
import { TabulatorTable } from "./components/Table/Table";

function App() {
  const [parseData,setParsedData]=useState()
  return (
    <div className="App">
      <TableControl setParsedData={setParsedData}/>
      <div
        style={{
          width: "50%",
          backgroundColor: "#555555",
          padding: "10px",
          height: "450px",
          marginTop: "20px",
        }}
      >
        <TabulatorTable parseData={parseData}/>
      </div><CustomModal />
    </div>
  );
}

export default App;
