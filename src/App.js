import "./App.css";
import { useEffect, useState } from "react";
import "react-tabulator/lib/styles.css";
import { OpenLayersMap } from "./components/openlayer/Openlayer";
import { TableControl } from "./components/TableControl/TableControl";
import { Table } from "./components/table/Tabel";
// import { PieChart, BarChart } from "./components/Charts/PieChart";

import { BarChart } from "./components/Charts/BarChart";
import { AnalyseButtons } from "./components/TableControl/AnalyseButtons";
import {PieChart } from "./components/Charts/PieDiagram"
function App() {
  const [parseData, setParsedData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [activeTableData, setActiveTableData] = useState([])
  const [lineString, setLineString] = useState(null)
  const [isFiltered, setIsFiltered] = useState(true);
  const [unmout, setUnmount] = useState(true)
  const [diagramsVisibility, setDiagramVisibility] = useState({ analyse1: false, analyse2: false })
  const anaylseButtonHAndler = (e) => {
    const { name } = e.target
    setDiagramVisibility(prev => ({ analyse1: false, analyse2: false, [name]: true }))
    setIsFiltered(!isFiltered)
  }

  useEffect(() => {
    setUnmount(true)
  }, [lineString])
  return (
    <div className="App">
      <TableControl setParsedData={setParsedData} setShowModal={setShowModal} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: "50%",
            backgroundColor: "#555555",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          {/* <TabulatorTable parseData={parseData} setShowModal={setShowModal} /> */}
          <Table
            parseData={parseData}
            setShowModal={setShowModal}
            showModal={showModal}
            setActiveTableData={setActiveTableData}
            setIsFiltered={setIsFiltered}
            isFiltered={isFiltered}
            setLineString={setLineString}
            setUnmount={setUnmount}

          />

        </div>
        {(lineString && unmout) && <div style={{ maxHeight: '200px', width: '50%' }}>
          <OpenLayersMap lineString={lineString} />
        </div>}
      </div>

      <AnalyseButtons setParsedData={setParsedData} anaylseButtonHAndler={anaylseButtonHAndler} />
      {activeTableData?.length > 0 && <div
        style={{
          width: "50%",
          backgroundColor: "#555555",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {diagramsVisibility.analyse1 ? <PieChart data={activeTableData} /> :

          diagramsVisibility.analyse2 ? <BarChart data={activeTableData} /> : null}
      </div>}
    </div>
  );
}

export default App;
