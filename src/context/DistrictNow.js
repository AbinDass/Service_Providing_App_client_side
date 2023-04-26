


import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
export const DistrictContext = createContext()
export const DistrictProvider = ({children}) =>{
    
    const user = useSelector((state) => state.user.data.user);
    const isAuth = Boolean(useSelector((state) => state.user.token));
    let currentLocation;
    if (isAuth) {
        currentLocation = user?.distric;
    } else {
        currentLocation = "choose locattion";
    }
    const [districtNow, setDistrictNow] = useState(currentLocation)

    return (
        <DistrictContext.Provider value={{districtNow, setDistrictNow}}>
            {children}
        </DistrictContext.Provider>
    )
}
