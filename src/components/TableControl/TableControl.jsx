import { UploadButton } from './UploadButton'
import classes from './style.module.css'
export const TableControl=({setParsedData})=>{
    return(
        <div style={{ display:'flex',width:'50%',backgroundColor:'#555555',padding:'10px'}} >
        <UploadButton setParsedData={setParsedData}/>
        <button className={classes.button}>Add NewData</button>
       </div> 
    )
}