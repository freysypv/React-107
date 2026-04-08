import { createContext } from 'react';
import Product from '../components/product';

//GLOBALcONTEXT DEFINES CONTEXT STRUCTURE

const GlobalContext = createContext({
    user:{

    }// Default user is an empty object, can store user information like name, email, etc.
    // client:{},
    // Product: [],
    // addProduct:
})

export default GlobalContext;