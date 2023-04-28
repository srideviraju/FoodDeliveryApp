import { useState,useContext } from "react";
import {Link} from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const AuthenticateUser=()=>{
    //API call to check authrntication
    return true;
}

const Title = () =>
(
<a href='/'>
<img src='https://images.yourstory.com/cs/images/companies/Hungerbox1-1588605397365.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff' className="h-28 px-2" alt='hunger box'/></a>
);//JSX expression



const Header =  () => {
    const [title,setTitle] = useState('Food villa');
    const [isLoggenIn,setIsLoggedIn] =useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return(

    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title/>
<div className="nav-items">
    <ul className="flex py-10">
    <Link to='/'><li className="px-2">
            Home
        </li></Link>
        <Link to='/about'> <li className="px-2">
            about
        </li></Link>
        <Link to='/contact'> <li className="px-2">
            Contact
        </li></Link>
   
        <Link to='/instamart'> <li className="px-2">
            Instamart
        </li></Link>
       <Link to='/cart'> <li className="px-2">
            Cart -{cartItems.length}
        </li></Link>
    </ul>
</div>



{
    isLoggenIn ? (<button onClick={()=>{setIsLoggedIn(false)}}>logout</button>) : (<button onClick={()=>{setIsLoggedIn(true)}}>login</button>)
}


    </div>);
    };

    export default Header;