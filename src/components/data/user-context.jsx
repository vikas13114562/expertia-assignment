import { createContext, useState } from "react";

export const UserContext = createContext({
    fname:"",
    setFname: () => {},
    date: "",
    setDate:() =>{}
  });

  export const UserProvider =({children}) =>{
    const [fname, setFname] = useState("");
    const [date, setDate] = useState("");

    const value = { fname, setFname, date, setDate };
   
     return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  }