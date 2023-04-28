
import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userInfo:{}
        };
console.log('child constructor');

    }

    async  componentDidMount(){
      
            const data = await fetch('https://api.github.com/users/srideviraju');
            const response = await data.json();
            this.setState({
                userInfo: response
            })
        //API call
        console.log('parent component did mount');
      
        console.log('child compoenentDidmount')
    }

    componentDidUpdate(){
        console.log('component updated')
    }
    componentWillUnmount(){
        console.log('component will unmount')

    }
render(){
    const {count} = this.state;
    const {avatar_url,name,location} = this.state.userInfo;
    console.log('child render');
    return(

        <div><h1> Class Component </h1>
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h3>location : {location}</h3>
        {/* <span> count: {count}</span> */}
<button onClick={()=>{ this.setState({count:1})}}>count</button>
        </div>
    )
}

}
export default Profile;