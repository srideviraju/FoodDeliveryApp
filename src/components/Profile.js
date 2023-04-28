import { useEffect, useState } from "react";


const Profile =(props)=>{
    const [count,setCount] = useState('0');
    useEffect(()=>{//api call
    console.log('useEffect')
    })

    return (
<div><h2>Profile from Function component</h2>
<h3>name:{props.name}</h3>
<h4>count : {count}</h4>
<button onClick={()=>{ setCount('1')}}>count</button>
</div>

    );
}


export default Profile;