import { IMG_CDN_URL } from "../constants"; 
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestuarantCard = ({cloudinaryImageId,name,cuisines,avgRating
    // , user
})=> {
    // console.log(props);
    const {user} = useContext(UserContext);
    return(
  
<div className="card  w-56 p-2 m-2 shadow-lg bg-pink-50">
    <img src ={IMG_CDN_URL + cloudinaryImageId} className='logo' alt='burger king'/>
    <h2 className="font-bold text-">{name}</h2>
        <h4 className="break-normal">{cuisines.join(', ')}</h4>
        <h5>{avgRating}</h5>
    
</div>
    );
};

export default RestuarantCard;