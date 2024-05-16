function Data(){

    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ded85df57mshbeb5cc1a7fdc43dp134befjsn76d5c76c3d50',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    async function FetachData(){
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    return { FetachData }
    
    
}

export default Data;