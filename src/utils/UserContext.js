import { createContext } from "react";

const UserContext = createContext({user:{
    name : 'Dummy name',
    email : 'dff@hnmail.com',
}});
export default UserContext;