// import axios from "axios"
import Cards from "../cardIteam/cards"
import { useState } from "react";
function Header(){
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
        const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2ded85df57mshbeb5cc1a7fdc43dp134befjsn76d5c76c3d50',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);                          //stored api data into usestate setdata
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
      <div>
        <h2>Awesome Exerises You should Know</h2>
        <input type="text" placeholder="Search Exericeses" />
        <button onClick={fetchData}>
          SUBMIT
        </button>
        {
            data.map((iteam,id)=>(                                     //useing usestate data to render data from api
               <Cards key={id} img={iteam.gifUrl} name={iteam.name} body={iteam.bodyPart} equip={iteam.equipment} target={iteam.target}  />
            ))
        }
      </div>
    );
  }
export default Header;