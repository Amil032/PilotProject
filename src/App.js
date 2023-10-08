import "./App.css";
import { useState } from "react";
import "react-tabulator/lib/styles.css";

import { TableControl } from "./components/TableControl/TableControl";
import { Table2 } from "./components/table2/Tabel2";
import { PieChart } from "./components/Charts/PieChart";
import { AnalyseButtons } from "./components/TableControl/AnalyseButtons";
import { PieChart2 } from "./components/Charts/Piechart2";
import { BarChart } from "./components/Charts/BarChart";
import { BarChart2 } from "./components/Charts/BarChart2";
function App() {
  const [parseData, setParsedData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [activeTableData,setActiveTableData]=useState()
const anaylseButtonHAndler=()=>{

}
console.log(activeTableData,'acttititd')

  return (
    <div className="App">
      <TableControl setParsedData={setParsedData} setShowModal={setShowModal} />
      <div
        style={{
          width: "80%",
          backgroundColor: "#555555",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {/* <TabulatorTable parseData={parseData} setShowModal={setShowModal} /> */}
        <Table2 parseData={parseData} setShowModal={setShowModal} showModal={showModal} setActiveTableData={setActiveTableData}/>
      
      </div>
      <AnalyseButtons setParsedData={setParsedData} />
      {/* <PieChart/> */}
      {activeTableData&&<BarChart2 data={activeTableData}/>}
      {/* {activeTableData&&<BarChart data={activeTableData}/>} */}
      {activeTableData&&<PieChart2 data={activeTableData}/>}
    </div>
  );
}

export default App;
