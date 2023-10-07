import React, { useState } from "react";

import { ReactTabulator } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/styles.css"; // required base styles.

// --- Comment out the Theme you want to try:
// import "react-tabulator/css/tabulator.min.css"; // default
// import "react-tabulator/css/tabulator_modern.min.css"; // default
// import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // bootstrap
// import "react-tabulator/css/bulma/tabulator_bulma.min.css"; // bulma
import "react-tabulator/css/semantic-ui/tabulator_semantic-ui.min.css"; // semantic
// import "react-tabulator/css/materialize/tabulator_materialize.min.css"; // meterialize

import { editableColumns, data } from "./data";

export const TabulatorTable = ({ parseData }) => {
  console.log(parseData);
  const ref = null;
  const [data, setData] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log(`rowClick id: \${row.getData().id}`, row, e);
    setSelectedName(row.getData().name);
  };

  const clearData = () => {
    setData([]);
  };
  const options = {
    height: 150,
    movableRows: true,
  };

  return (
    <div>
      {/* <h3>Import the Theme you want to use:</h3> */}
      <ReactTabulator
        columns={editableColumns}
        data={parseData}
        footerElement={<span>Footer</span>}
        options={{
          layout: "fitColumns",
          pagination: "local",
          paginationSize: 8,
          paginationCounter: "rows",
        }}
      />
    </div>
  );
};
