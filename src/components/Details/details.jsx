import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
function Details(){
const[displayData,setDisplayData]=useState([]);
const {id}=useParams()



useEffect(()=>{
    Detaileddiplay().then((results)=>{
        setDisplayData(results);
    })  
},[])


const url = `https://exercisedb.p.rapidapi.com/exercises/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ded85df57mshbeb5cc1a7fdc43dp134befjsn76d5c76c3d50',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    async function Detaileddiplay(){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }






return(
    <>
    <div>

        <div>
            <img src={displayData.gifUrl} style={{width:"200px"}}/>
        </div>
        <div>
            <h1>{displayData.name}</h1>
            <p>{displayData.instructions}</p>
        </div>
    </div>
    </>
)
}
export default Details;