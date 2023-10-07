import React, { useRef, useState } from "react";
import classes from "./style.module.css";
import * as XLSX from "xlsx";
export const UploadButton = ({ setParsedData }) => {
  
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleUpload = (e) => {
    e.preventDefault();
    var files = e.target.files, 
    f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];
        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws);
        setParsedData(dataParse);
    };
    reader.readAsBinaryString(f)

  };

  return (
    <div>
      <button onClick={handleFileSelect} className={classes.button}>
        Load Excel File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleUpload}
        accept=".xlsx"
      />
    </div>
  );
};
