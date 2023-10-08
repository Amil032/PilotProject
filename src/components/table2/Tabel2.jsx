import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library
import { reactFormatter } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import { EditTwoTone, DeleteTwoTone, HeatMapOutlined } from "@ant-design/icons";
function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const row = props.cell._cell.row;
  console.log(row, "rrrrrrr", rowData);
  // const cellValue = props.cell._cell.value || "Edit | Show";
  switch (props.action) {
    case "edit":
      return <EditTwoTone onClick={() => props.onSelect(rowData.id)} />;
    case "delete":
      return <DeleteTwoTone onClick={() => props.onSelect(rowData.id)} />;
    case "map":
      return <HeatMapOutlined onClick={() => props.onSelect(rowData)} />;
  }
}

export const Table2 = ({ parseData, setShowModal }) => {
  const [lastId, setLastId] = useState();

  useEffect(() => {
    if (parseData) {
      const length = parseData.length;
      setLastId(parseData[length - 1].id);
    }
  }, [[parseData]]);

  const deleteRowHandler = (row) => {
    console.log(tabulator.getData("active"), "sdsdsds");
    tabulator.deleteRow(row);
    console.log(row);
  };
  const editRowHandler = (row) => {
    setShowModal(true)
    // tabulator.updateRow(row, { len: "bob", wkt: "male" });
  };
  const addRowHAndler = (data) => {
    console.log(data);
    var row = tabulator.getData("active"); //return row component with index of 1
    // var rowData = row.getData();
    console.log(row);
    tabulator.addRow({
      id: row[0].id + 1,
      len: 2323232,
      wkt: "lendfdf(dfdfdf)",
      status: 0,
    });
    setLastId((prev) => prev + 1);
  };
  let ref = React.createRef();
  const editableColumns = [
    {
      title: "id",
      field: "id",
      width: 100,
      headerFilter: "input",
      sorter: "number",
    },
    {
      title: "len",
      field: "len",
      width: 150,
      hozAlign: "left",
      headerFilter: "input",
    },
    {
      title: "wkt",
      field: "wkt",
      headerFilter: "input",
    },
    {
      title: "delete",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton action="delete" onSelect={deleteRowHandler} />
      ),
    },
    {
      title: "edit",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton action="edit" onSelect={editRowHandler} />
      ),
    },
    {
      title: "map",
      field: "",
      width: 40,
      formatter: reactFormatter(
        <SimpleButton action="map" onSelect={addRowHAndler} />
      ),
    },
  ];
  let tabulator = null; //variable to hold your table

  useEffect(() => {
    //instantiate Tabulator when element is mounted
    tabulator = new Tabulator(ref, {
      data: parseData, //link data to table
      reactiveData: true, //enable data reactivity
      layout: "fitColumns",
      pagination: "local",
      paginationSize: 10,
      columns: editableColumns, //define table columns
      initialSort: [
        { column: "id", dir: "desc" }, //sort by this first
        // {column:"height", dir:"desc"}, //then sort by this second
      ],
    });
  }, [parseData]);

  return <div ref={(el) => (ref = el)} />;
};
