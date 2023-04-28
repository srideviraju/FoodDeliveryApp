
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu =()=>{
    const {id} = useParams(); // destructuring
const [restaurantMenuDetails,menu] = useRestaurant(id) ;
const dispatch = useDispatch();
const handleAddItem = (item) =>{
    dispatch(addItem(item));
}
return(
    <>
<div className="flex">
    <div className="menu"> <h1>Restuanat id - {id}</h1> 
    <h2> {restaurantMenuDetails?.name}</h2>
  <img src={IMG_CDN_URL + restaurantMenuDetails?.cloudinaryImageId} />
    <h3>{restaurantMenuDetails?.areaName}</h3>
    <h4>{restaurantMenuDetails?.city}</h4>
    <h4> {restaurantMenuDetails?.avgRating}</h4>
    <h4>{restaurantMenuDetails?.costForTwoMessage}</h4> 
    </div>
    <div>
        <h1>Menu</h1>
        <ul>
    {menu && menu.length ?  menu.map((item)=>{
        return (
        <>
        <li key={item.card.info.id}>{item.card.info.name} </li>
      <div>   <button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem(item.card.info)}>Add</button></div>
        </>
        );
        }) : ''}
    </ul>
    </div>
    </div>
    </>
)
}

export default RestaurantMenu;