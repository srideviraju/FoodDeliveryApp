import { Outlet } from "react-router";
import ProfileFunctional from "./Profile";
import Profile from './ProfileClass';
import React from 'react';
import UserContext from "../utils/UserContext";


const About2 =()=>{

    return(
<>
        <div> About page</div>
{/* <Outlet/> */}

</>

    );
}

class About extends React.Component{

    constructor(props){
        super(props);
        this.state={
      count: 0
        }
        console.log('parent constructor');
    }

  componentDidMount(){

//API call
console.log('parent component did mount');

    }
render(){
    console.log('parent render')
    return(
        <>
                <div> About page</div>
                <UserContext.Consumer>
{({user})=>
(
<div> {user.name}- {user.email}</div> 
)}
                </UserContext.Consumer>

        <Profile name={'First child'}/>
        {/* <Profile name={'second child'}/> */}
        </>
        
            );
}

}

export default About;