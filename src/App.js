import React,{lazy,Suspense, useState} from "react";
import  ReactDOM  from "react-dom/client";
import  Header, {Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter} from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Contact  from "./components/Contact";
import RestaurantMenu  from "./components/RestaurantMenu";
import Profile  from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from './utils/store';
import Cart from "./components/Cart";



//LAZY load
const Instamart = lazy(()=>import("./components/Instamart"))


//JSX

    const AppLayout =()=>{

        const [user,setUser]= useState({
            name:'sridevi',
            email: 'srideviss@gmail.com'
        })

      return(  
        <Provider store={store}>
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
<Header/>

<Outlet/>
<Footer/>
</UserContext.Provider>
</Provider>
);
    };
    const appRouter = createBrowserRouter([
        { path:'/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            { path:'/',
            element: <Body user={{
                name:'sridevi',
                email: 'srideviss@gmail.com',
            }}/>
            },
            { path:'/About',
            element: <About/>,
            children:[
                { path:'profile',
                element: <Profile/>,

                }
            ]
            },
            { path:'/Contact',
            element: <Contact />
            },
            { path:'/restaurant/:id',
            element: <RestaurantMenu />
            },
            { path:'instamart',
            element: (<Suspense fallback={<Shimmer/>}>
                <Instamart />
                </Suspense>),
            },
            { path:'/cart',
            element:  <Cart />
               
            },
        ],
        },
       
     
     ])
     
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRouter} />)



 // render modifies DOM , it modifies