import { useEffect,useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant =(resId) =>{
    const [restaurantMenu, setRestaurantMenu] = useState({});
    const [restaurantDetails, setRestaurantDeatils] = useState(null)
//get data from API
    useEffect(()=>{getrestaurantInfo()},[]);
    async function getrestaurantInfo(){
const data = await fetch(FETCH_MENU_URL+resId);
const restaurant = await data.json();
setRestaurantMenu(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);

setRestaurantDeatils(restaurant?.data?.cards[0]?.card?.card.info);
    }

//return restaurant data
return [restaurantDetails,restaurantMenu];
} 
export default useRestaurant;