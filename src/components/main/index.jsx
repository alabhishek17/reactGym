
import Exerises from "../Exercise/exercise";
import Navbar from "../Navabar/nava";
import Body from "../Body/body";
import Footer from "../Footer/footer";
function Index(){
    return (
        <div>
          <Navbar/>
          {/* <Exerises/> */}
          <Body/>
          <Footer/>
        </div>
    )
}
export default Index;