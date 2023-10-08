import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library
import { reactFormatter } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import { EditTwoTone, DeleteTwoTone, HeatMapOutlined } from "@ant-design/icons";
import { CustomModal } from "../Modal/CustomModal";

function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const row = props.cell._cell.row;
  // const cellValue = props.cell._cell.value || "Edit | Show";
  switch (props.action) {
    case "edit":
      return <EditTwoTone onClick={() => props.onSelect(rowData)} />;
    case "delete":
      return <DeleteTwoTone onClick={() => props.onSelect(rowData.id)} />;
    case "map":
      return <HeatMapOutlined onClick={() => props.onSelect(rowData)} />;
  }
}

export const Table2 = ({ parseData, setShowModal, showModal,setActiveTableData }) => {
  const [value, setValue] = useState({});
  const [isFiltered,setIsFiltered]=useState(true)
  const changeHandler = (value, name) => {
    setValue((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const deleteRowHandler = (row) => {
    console.log(tabulator.current.getData("active"), "sdsdsds");
    tabulator.current.deleteRow(row);
    console.log(row);
  };
  const editRowHandler = (row) => {
    setShowModal(true);
    setValue(row);
    // tabulator.updateRow(row, { len: "bob", wkt: "male" });
  };
  const onClickEditRowHandler = () => {
    value.id?tabulator.current.updateRow(value.id, { ...value }):addRowHAndler()
    setValue({});
    setShowModal(false);

  };
  const addRowHAndler = (data) => {
    var row = tabulator.current.getData("active"); //return row component with index of 1
    // var rowData = row.getData();
    tabulator.current.addRow({
      id: row[0].id + 1,
      ...value,
    });
  };

  let ref = useRef();
  const editableColumns = [
    {
      title: "id",
      field: "id",
      width: 100,
      headerFilter: "input",
      sorter: "number",
      headerFilterPlaceholder:'axtar'
    },
    {
      title: "len",
      field: "len",
      width: 150,
      hozAlign: "left",
      headerFilter: "input",
      headerFilterPlaceholder:'axtar'
    },
    {
      title: "wkt",
      field: "wkt",
      headerFilter: "input",
      headerFilterPlaceholder:'axtar'
    },
    {
      title: "status",
      field: "status",
      headerFilter: "select",
      headerFilterParams: {values: [0,1,2]},
      headerFilterPlaceholder:'sec'
      
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
  let tabulator = useRef(null); //variable to hold your table

  useEffect(() => {
    //instantiate Tabulator when element is mounted
    tabulator.current = new Tabulator(ref, {
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
useEffect(()=>{
    tabulator.current.on("dataFiltering", function(filters, rows){
        setIsFiltered(!isFiltered)
     });
})
 
     

 useEffect(()=>{
    setActiveTableData(tabulator.current.getData('active'))
 },[isFiltered])

  return (
    <>
      <div ref={(el) => (ref = el)} />
      <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        changeHandler={changeHandler}
        onClickEditRowHandler={onClickEditRowHandler}
        value={value}
        setValue={setValue}
      />
    </>
  );
};
