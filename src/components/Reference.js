// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   ));
  
//   // You can now get a ref directly to the DOM button:
//   const ref = React.createRef();
//   <FancyButton ref={ref}>Click me!</FancyButton>;
import React from 'react';


 class Reference extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{}
           
        }
    }

    // async componentDidMount(){

    //     const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8892684&lng=77.63991&submitAction=ENTER&restaurantId=295');
    //     const jsonData =  await data.json();
    //     console.log(jsonData);
    //     this.setState({userInfo: jsonData});
    // }

    // getDetails(){

    //     console.log('hello');
    // }

    render(){

        return(

<div>
<h1>hdbfhgfv</h1>
<button>click </button>
</div>
        );
    }
}

export default Reference;