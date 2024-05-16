import style from "./css_exercise.module.css"
import Data from "../data"
import { useState, useEffect} from "react";
function Exerises(){
const {FetachData}=Data();
const [allData,setAllData]=useState([]);

useEffect(()=>{
    FetachData().then((result)=>{
        setAllData(result)
    })
},[])

console.log(allData);


return(
    <div className={style.container}>
        {
            allData.map((iteam,id)=>(
                <div key={id} >
                    <div className={style.cards}>
                        <img src={iteam.gifUrl} alt="" />
                        <div className={style.text}>
                          <span style={{backgroundColor:"GrayText"}}>{iteam.bodyPart}</span>
                          <span style={{backgroundColor:"yellowgreen"}}>{iteam.target}</span>
                          <span style={{backgroundColor:"aqua"}}>{iteam.equipment}</span>  
                        </div>
                        <h2>{iteam.name}</h2>
                    </div>
                </div>
            ))
        }
    </div>
)
}
export default Exerises