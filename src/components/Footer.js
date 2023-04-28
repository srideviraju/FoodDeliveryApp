import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
    <div> Footer
        <h4> This site is developed by {user.name} - {user.email}</h4>
    </div>
    );
     
};

export default Footer;