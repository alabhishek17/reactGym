function Navbar(){
    return(
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"30px",backgroundColor:"black",color:"white"}}>
        <div><h3>FITGUR</h3></div>
        <div style={{display:"flex", gap:"40px"}}>
            <a style={{color:"white",textDecoration:"none"}} href="http://">HOME</a>
            <a style={{color:"white",textDecoration:"none"}} href="">EXERCISES</a>
        </div>
      </div>  
    )
}
export default Navbar;