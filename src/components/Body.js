import { restuarantList } from "../constants";
import RestuarantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";   
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body =() =>{
    // let searchTxt = 'KFC';
    const [searchText,setSearchText]= useState('KFC');
    // const [searchclicked,setSearchClicked] = useState('false');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// console.log(restaurants);
const {user,setUser} = useContext(UserContext);
useEffect(()=>{
    getDetails();

},[]);
async function getDetails(){
 const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8892684&lng=77.63991&page_type=DESKTOP_WEB_LISTING');
 const response = await data.json();

setAllRestaurants(response.data?.cards[2]?.data?.data?.cards);
setFilteredRestaurants(response.data?.cards[2]?.data?.data?.cards);


}

const offline = useOnline();
if(!offline){
    return <h1> Offline ,Please build your internet connection</h1>
}

//not render component (early return)
if(!allRestaurants) return null;

    return allRestaurants.length ===0 ? (<Shimmer/>):  (
        <>
        <div className="search-container p-5 bg-pink-50 my-5">
            <input type='text' value={''} placeholder='search' className="search-input focus:bg-pink-50" onChange={(e)=>{setSearchText(e.target.value)}}/>

            
            <button className="search-btn p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500" 
            onClick={()=>{ const data = filterData(searchText,allRestaurants); 
                setFilteredRestaurants(data);}}>Search </button> 
              
        </div>
        <div className='flex flex-wrap'>
        
           { filteredRestaurants.length ?filteredRestaurants.map((item ) => {
                return  <Link to={"/restaurant/"+item.data.id} key={item.data.id}><RestuarantCard {...item.data} key={item.data.id} user ={user}/></Link>

            }):  ( <div> no Restaurant found</div>)}
        {/* <RestuarantCard {...restuarantList[0].data}/> */}
      
        </div>
        </>
    ) 

    
};

export default Body;