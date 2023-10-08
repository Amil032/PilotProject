import { UploadButton } from "./UploadButton";
import classes from "./style.module.css";
export const AnalyseButtons = ({ setParsedData }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        backgroundColor: "#555555",
        padding: "10px",
        marginTop:'20px'
      }}
    >
     <button className={classes.button} onClick={() => 'ss'}>
        Analiz-1
      </button>
      <button className={classes.button} onClick={() => 'setShowModal(true)'}>
        Analiz-2
      </button>
    </div>
  );
};
