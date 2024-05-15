import axios from "axios"

function Header(){
  async function feachData(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
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
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  }
//   feachData();
return(
    <div>
        <h1>hi</h1>
        <button onClick={feachData}>get data</button>
    </div>
)
}
export default Header;