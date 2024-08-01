import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout(){
    return(<>

    <Header></Header>
    <Outlet></Outlet><br></br>
    <Footer></Footer>
    </>)
}
export default Layout