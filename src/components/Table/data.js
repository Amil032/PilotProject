import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";

function SimpleButton(props) {
  const rowData = props.cell._cell.row.data;
  const cellValue = props.cell._cell.value || "Edit | Show";
  return <button onClick={() => alert(rowData.name)}>{cellValue}</button>;
}

export const data = [
  {
    id: 1,
    name: "Oli Bob",
    age: "12",
    color: "red",
    dob: "01/01/1980",
    rating: 5,
    passed: true,
    pets: ["cat", "dog"],
  },
  {
    id: 2,
    name: "Mary May",
    age: "1",
    color: "green",
    dob: "12/05/1989",
    rating: 4,
    passed: true,
    pets: ["cat"],
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    color: "yellow",
    dob: "07/01/1999",
    rating: 4,
    passed: false,
  },
  {
    id: 6,
    name: "Van Ng",
    age: "37",
    color: "green",
    dob: "06/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog", "fish"],
  },
  {
    id: 7,
    name: "Duc Ng",
    age: "37",
    color: "yellow",
    dob: "10/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog"],
  },
];

// Editable Example:
export const colorOptions = {
  "": "&nbsp;",
  red: "red",
  green: "green",
  yellow: "yellow",
};
export const petOptions = [
  { id: "cat", name: "cat" },
  { id: "dog", name: "dog" },
  { id: "fish", name: "fish" },
];
export const editableColumns = [
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
    title: "",
    field: "",
    width: 40,
    // sorter: "date",
    // editor: DateEditor,
    // editorParams: { format: "MM/DD/YYYY" }
  },
  {
    title: "",
    field: "",
    width: 40,
    formatter:"image", formatterParams:{
        height:"50px",
        width:"50px",
        urlPrefix:"http://website.com/images/",
        urlSuffix:".png",
    }
    // sorter: (a, b) => a.toString().localeCompare(b.toString()),
    // // editor: MultiSelectEditor,
    // editorParams: { values: petOptions },
    // formatter: MultiValueFormatter,
    // formatterParams: { style: "PILL" }
  },
  {
    title: "",
    field: "",
    width: 40,
    // hozAlign: "",
    formatter: "progress",
    // editor: true
  },
];
