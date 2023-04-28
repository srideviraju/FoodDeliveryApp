import { IMG_CDN_URL } from "../constants"; 


const FoodItem = ({imageId,name,category,description,price})=> {

    return(
  
<div className="card  w-56 p-2 m-2 shadow-lg bg-pink-50">
    <img src ={IMG_CDN_URL + imageId} className='logo' alt='burger king'/>
    <h2 className="font-bold text-">{name}</h2>
        <h4 className="break-normal">{category}</h4>
        <h5>{description}</h5>
        <h5>Rupees: {price/100}</h5>
    
</div>
    );
};

export default FoodItem;