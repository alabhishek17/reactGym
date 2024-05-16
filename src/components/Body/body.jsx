import style from "./css_body.module.css"
import { useEffect, useState } from "react";
import Data from "../data";
function Body() {
    const { FetachData } = Data()
    const [mainData, setMainData] = useState([]);
    const [FilteringData,setFilteringData]=useState(mainData)
    const [search, setSearch] = useState("");

    useEffect(() => {
        FetachData().then((result) => {
            setFilteringData(result)
            setMainData(result)
        })

    }, [])


 const filteringData =(id,name)=>{
    const filterUpdate=mainData.filter((iteam)=>{
       return iteam.bodyPart.toLowerCase()===name.toLowerCase()
    })
    setFilteringData(filterUpdate);
 }


    const searchBtn = () => {
        const SearchData = mainData.filter((iteam) => {
            return iteam.bodyPart.toLowerCase().includes(search.toLowerCase())
        })
        // setSearch(SearchData)
        setFilteringData(SearchData)    //we show data in setFilteringData becuse intital all data present in this setFilteringData so we have to search here
    }

    

    console.log(setMainData);
    const gymItems = [
        { id: 1, name: "Back" },
        { id: 2, name: "Cardio" },
        { id: 3, name: "Chest" },
        { id: 4, name: "Lower Arms" },
        { id: 5, name: "Lower Legs" },
        { id: 6, name: "Shoulders" },
        { id: 7, name: "Waist" },
        { id: 8, name: "Upper Arms" },
        { id: 9, name: "Upper Legs" }
    ]


    return (
        <div>
            <div className={style.container1}>
                <div className={style.subCont}>
                    <h1 style={{ padding: "10px", }}>FASTER,STRONGER</h1>
                    <h1> <span style={{ color: "orangered" }}>FIGHT</span> TO THE END</h1>
                    <button>GET ALL EXERCISE</button>
                </div>

            </div>
            <div style={{ textAlign: "center", alignItems: "center", margin: "30px" }}>
                <h2>Awesome Exercises You Should Know</h2>
                <div>
                    <input type="text" style={{ padding: "10px 40px" }} placeholder="Search Exercise" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={searchBtn}>SUBMIT</button>

                </div>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    {
                        gymItems.map((iteam, id) => (
                            <div key={id} className={style.gymContainer} onClick={()=>filteringData(iteam.id,iteam.name)}>
                                <img src="https://www.svgrepo.com/show/196327/dumbbell-gym.svg" alt="" width={30} />
                                <h3>{iteam.name}</h3>
                            </div>
                        ))
                    }
                </div>



                <div  className={style.container}>
                {
            FilteringData.map((iteam,id)=>(
                <div key={id}  >
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




            </div>
        </div>
    )
}
export default Body;