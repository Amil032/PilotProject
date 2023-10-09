import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library
import { reactFormatter } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import { CustomModal } from "../modal/CustomModal";
import { Svg } from "../svg/Svg";

function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const row = props.cell._cell.row;
  // const cellValue = props.cell._cell.value || "Edit | Show";
  switch (props.action) {
    case "edit":
      return <Svg name='edit' color='gray' onClick={() => props.onSelect(rowData)} />;
    case "delete":
      return <Svg name='delete' color='gray' onClick={() => props.onSelect(rowData.id)} />;
    case "map":
      return <Svg name='location' color='gray' onClick={() => props.onSelect(rowData)} />;
    default:
      return null;
  }
}

export const Table = ({
  parseData,
  setShowModal,
  showModal,
  setActiveTableData,
  setIsFiltered,
  isFiltered,
  setLineString,
  setUnmount,
}) => {
  const [value, setValue] = useState({});

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
    value.id
      ? tabulator.current.updateRow(value.id, { ...value })
      : addRowHAndler();
    setValue({});
    setShowModal(false);
  };
  const addRowHAndler = (data) => {
    var row = tabulator.current.getData(); //return row component with index of 1
    const compare=(a,b)=>b.id-a.id
    row.sort(compare)
    tabulator.current.addRow({
      id: row[0].id + 1,
      ...value,
    });
  };
  const showOnmapHandler = (data) => {
    setUnmount(false);
    setLineString(data.wkt);
  };
  let ref = useRef();
  const editableColumns = [
    {
      title: "id",
      field: "id",
      width: 100,
      headerFilter: "input",
      sorter: "number",
      headerFilterPlaceholder: "Axtar",
    },
    {
      title: "len",
      field: "len",
      width: 150,
      hozAlign: "left",
      headerFilter: "input",
      headerFilterPlaceholder: "Axtar",
    },
    {
      title: "wkt",
      field: "wkt",
      headerFilter: "input",
      headerFilterPlaceholder: "Axtar",
    },
    {
      title: "status",
      field: "status",
      headerFilter: "select",
      headerFilterParams: { values: [0, 1, 2] },
      headerFilterPlaceholder: "Seç",
    },
    {
      title: "",
      field: "",
      width: 40,
      headerSort:false,
      formatter: reactFormatter(
        <SimpleButton action="delete" onSelect={deleteRowHandler} />
      ),
    },
    {
      title: "",
      field: "",
      width: 40,
      headerSort:false,
      formatter: reactFormatter(
        <SimpleButton action="edit" onSelect={editRowHandler} />
      ),
    },
    {
      title: "",
      field: "",
      width: 40,
      headerSort:false,
      formatter: reactFormatter(
        <SimpleButton action="map" onSelect={showOnmapHandler} />
      ),
    },
  ];
  let tabulator = useRef(null); //variable to hold your table

  useEffect(() => {
    //instantiate Tabulator when element is mounted
    tabulator.current = new Tabulator(ref, {
      data: parseData,
      reactiveData: true,
      layout: "fitColumns",
      paginationSize: 10,
      columns: editableColumns,
      local:'fr',
      initialSort: [
        { column: "id", dir: "desc" }
      ],
    });
    
  }, [parseData]);
 

  useEffect(() => {
    setActiveTableData(tabulator.current.getData("active"));
console.log(tabulator.current.getData())
    
  }, [isFiltered]);
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
