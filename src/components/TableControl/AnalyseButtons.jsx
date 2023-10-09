import { UploadButton } from "./UploadButton";
import classes from "./style.module.css";
export const AnalyseButtons = ({ setParsedData, anaylseButtonHAndler }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        backgroundColor: "#555555",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <button
        className={classes.button}
        name="analyse1"
        onClick={anaylseButtonHAndler}
      >
        Analiz-1
      </button>
      <button
        className={classes.button}
        name="analyse2"
        onClick={anaylseButtonHAndler}
      >
        Analiz-2
      </button>
    </div>
  );
};
