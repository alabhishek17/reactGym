import {BrowserRouter,Routes,Route} from "react-router-dom"
import Body from "../Body/body"
import Exerises from "../Exercise/exercise"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import Navbar from "../Navabar/nava"
const AppRouter=()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/body" element={<Body/>}/>
            <Route path="/exercise" element={<Exerises/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;