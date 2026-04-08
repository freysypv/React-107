import { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalProvider = (props) => {
    // const [state, setState] = useState(initialState);
    const [user, setUser] = useState({
      id: 65,
      firstName: "Freysy",
      lastName: "Pena",
      email: "freysypv@htomail.com",
      avatar:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      address: {
        street: "123 Main street",
        city: "Anytown",
        state: "Tx",
        country: "USA",
        zip: "12345",
      },
    });
    
    
return (
    <GlobalContext.Provider value={{
        user // new method
        // user: user old method 
    }}>
        {props.children}


    </GlobalContext.Provider>
    
    )




}

export default GlobalProvider;