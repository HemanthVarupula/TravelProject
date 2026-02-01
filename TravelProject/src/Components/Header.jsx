import "../App.css"
import travel from  "../Asset/TRAVELIMG.png"
import Button from "./Button"
import { Link } from "react-router-dom"
const Header=()=>{
    return(
        <>
            <div className="flex justify-around h-[100px] w-auto border-2 m-4 p-2">
                <img src={travel} className="himg h-[82px] w-[82px]" alt="logo"/>
                 <Link to={"/about"}><Button Name="About Us"/></Link>
                 <Link to={"/contact"}><Button Name="Contact Us"></Button></Link>
                <Button Name="Login"></Button>
                {/* <button onClick={}></button> */}
            </div>
        </>
    )
}

export default Header;