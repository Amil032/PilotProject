import React, { useState } from "react";

import { ReactTabulator, reactFormatter } from "react-tabulator"; // for React 15.x
import "react-tabulator/lib/styles.css"; // required base styles.
import { EditTwoTone, DeleteTwoTone, HeatMapOutlined } from "@ant-design/icons";
// --- Comment out the Theme you want to try:
// import "react-tabulator/css/tabulator.min.css"; // default
// import "react-tabulator/css/tabulator_modern.min.css"; // default
// import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // bootstrap
// import "react-tabulator/css/bulma/tabulator_bulma.min.css"; // bulma
import "react-tabulator/css/semantic-ui/tabulator_semantic-ui.min.css"; // semantic
// import "react-tabulator/css/materialize/tabulator_materialize.min.css"; // meterialize

import { data } from "./data";
function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;

  // const cellValue = props.cell._cell.value || "Edit | Show";
  switch (props.action) {
    case "edit":
      return <EditTwoTone onClick={() => props.onSelect(rowData.id)} />;
    case "delete":
      return <DeleteTwoTone onClick={() => console.log(rowData)} />;
    case "map":
      return <HeatMapOutlined onClick={() => console.log(rowData)} />;
  }
}
export const TabulatorTable = ({ parseData, setShowModal }) => {
  console.log(parseData);
  //   const ref = null;
  //   const [datas, setData] = useState([]);
  //   const [selectedName, setSelectedName] = useState("");
  //   const rowClick = (e, row) => {
  //     console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
  //     console.log(`rowClick id: \${row.getData().id}`, row, e);
  //     setSelectedName(row.getData().name);
  //   };

  //   const clearData = () => {
  //     setData([]);
  //   };
  const options = {
    height: 150,
    movableRows: true,
  };

  // Editable Example:

  //   export const petOptions = [
  //     { id: "cat", name: "cat" },
  //     { id: "dog", name: "dog" },
  //     { id: "fish", name: "fish" },
  //   ];
  const editableColumns = [
    {
      title: "id",
      field: "id",
      width: 100,
      editor: "input",
      headerFilter: "input",
    },
    {
      title: "len",
      field: "len",
      width: 150,
      hozAlign: "left",
      headerFilter:'input'
      // formatter: "progress"
    },
    {
      title: "wkt",
      field: "wkt",

      // editor: "select",
      // editorParams: {
      //   allowEmpty: true,
      //   showListOnEmpty: true,
      //   values: colorOptions
      // },
      headerFilter: "input",
      // headerFilterParams: { values: colorOptions }
    },
    {
      title: "delete",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton action="delete" onSelect={(id) => console.log(id)} />
      ),
      // sorter: "date",
      // editor: DateEditor,
      // editorParams: { format: "MM/DD/YYYY" }
    },
    {
      title: "edit",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton
          action="edit"
          onSelect={(wkt) => {
            setShowModal(true);
          }}
        />
      ),
      //   formatterParams:{
      //       height:"50px",
      //       width:"50px",
      //       urlPrefix:"http://website.com/images/",
      //       urlSuffix:".png",
      //   }

      // sorter: (a, b) => a.toString().localeCompare(b.toString()),
      // editor: MultiSelectEditor,
      // editorParams: { values: petOptions },
      // formatter: MultiValueFormatter,
      // formatterParams: { style: "PILL" }
    },
    {
      title: "map",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton
          action="map"
          onSelect={(wkt) => {
            alert(wkt);
          }}
        />
      ),
      // hozAlign: "",

      // editor: true
    },
  ];
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
        // events={{ rowClick: (e,row) => console.log(row.getData()) }}
      />
    </div>
  );
};
