import { Link } from "react-router-dom";

function Navbar(){
    return(
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"30px",backgroundColor:"black",color:"white"}}>
        <div><h3>FITGUR</h3></div>
        <div style={{display:"flex", gap:"40px"}}>
            <p><Link to="/Body" style={{color:"white",textDecoration:"none"}}>HOME</Link></p>
            <p><Link to="/Exercise" style={{color:"white",textDecoration:"none"}}>EXERCISES</Link></p>
        </div>
      </div>  
    )
}
export default Navbar;