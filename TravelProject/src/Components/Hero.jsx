import TravelCard from "./TravelCard";
import data from "./Data";
import { Link } from "react-router-dom";
function Hero(){
    return(
        <>
        <div className=" h-auto mt-15 border-2 m-2 flex flex-wrap">
          {data.map((place)=>{return (<TravelCard key={place.id} id ={place.id} img={place.img} name={place.name}/>)})}
         </div>
        </>
    )
}

export default Hero;