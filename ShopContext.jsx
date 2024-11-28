import React, {createContext, useState} from 'react';

//create context
export const ShopContext =createContext();

import { productsData} from '../../data';

const ShopContextProvider = ({children}) => {
//provider state
const [products, setProducts] =  useState (productsData);



return <ShopContextProvider value= {{products}}>
  {children}
</ShopContextProvider>
};

export default ShopContextProvider
